import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import * as pathToRegexp from 'path-to-regexp';

import {
  HttpInterfaceMockAdapter,
  MockAdapterResponseFnc,
  MockAdapterResponseFncParams,
} from './HttpInterfaceMockAdapter';
import {
  HttpGetRequest,
  HttpResponse,
  HttpRequest,
  HttpDeleteRequest,
} from './HttpInterfaceService';
import { sleep } from '@app/utils/sleep';

@Injectable({
  providedIn: 'root',
})
export class HttpMockAdapterService implements HttpInterfaceMockAdapter {
  private mockResponsesGet = new Map<string, MockAdapterResponseFnc<any>>();
  private mockResponsesPost = new Map<string, MockAdapterResponseFnc<any>>();
  private mockResponsesPut = new Map<string, MockAdapterResponseFnc<any>>();
  private mockResponsesPatch = new Map<string, MockAdapterResponseFnc<any>>();
  private mockResponsesDelete = new Map<string, MockAdapterResponseFnc<any>>();

  private matchUrl(
    endpoint: string,
    urlsPattern: string[]
  ): { urlPattern: string; params: Record<string, string> } | null {
    let resul = null;

    urlsPattern.forEach((urlPattern) => {
      const [path, queryString] = urlPattern.split('?');
      let url = path;
      if (queryString) {
        url = `${url}\\?${queryString}`;
      }
      const checkUrl = pathToRegexp.match(url, {
        decode: decodeURIComponent,
      });

      const match = checkUrl(endpoint);

      if (match) {
        resul = {
          urlPattern,
          params: match?.params ?? {},
        };
      }
    });

    return resul;
  }

  private httpMock<T>(
    endpoint: string,
    urlsPattern: string[],
    mockResponse: Map<string, MockAdapterResponseFnc<any>>,
    { headers, body }: Omit<MockAdapterResponseFncParams, 'params'>
  ): Observable<HttpResponse<T>> {
    const match = this.matchUrl(endpoint, urlsPattern);

    if (!match) throw new Error('No mock response for URL');

    const mockFnc = mockResponse.get(
      match.urlPattern
    ) as MockAdapterResponseFnc<T>;

    let observableMock: Observable<HttpResponse<T>> = defer(async () => {
      await sleep(500);

      return await mockFnc({
        params: match.params,
        headers,
        body,
      })
        .then((data) => {
          const { status, response } = data;
          return Promise.resolve({
            ok: status >= 200 && status <= 299,
            json: () => Promise.resolve(response),
            status: status,
            headers: headers,
          }) as unknown as HttpResponse<T>;
        })
        .catch((error) => {
          const { status, response } = error;
          return Promise.reject({
            json: () => Promise.resolve(response),
            ok: status >= 200 && status <= 299,
            status: status,
            headers: headers,
          }) as unknown as HttpResponse<T>;
        });
    });

    return observableMock;
  }

  onGet<T>(urlPattern: string, mockFnc: MockAdapterResponseFnc<T>): void {
    this.mockResponsesGet.set(urlPattern, mockFnc);
  }

  get<T>({ endpoint, headers }: HttpGetRequest): Observable<HttpResponse<T>> {
    const urlsPattern = Array.from(this.mockResponsesGet.keys());
    return this.httpMock(endpoint, urlsPattern, this.mockResponsesGet, {
      headers,
    });
  }

  onPost<T>(urlPattern: string, mockFnc: MockAdapterResponseFnc<T>): void {
    this.mockResponsesPost.set(urlPattern, mockFnc);
  }

  post<T>({
    endpoint,
    body,
    headers,
  }: HttpRequest): Observable<HttpResponse<T>> {
    const urlsPattern = Array.from(this.mockResponsesPost.keys());
    return this.httpMock(endpoint, urlsPattern, this.mockResponsesPost, {
      headers,
      body,
    });
  }

  onPut<T>(urlPattern: string, mockFnc: MockAdapterResponseFnc<T>): void {
    this.mockResponsesPut.set(urlPattern, mockFnc);
  }

  put<T>({
    endpoint,
    body,
    headers,
  }: HttpRequest): Observable<HttpResponse<T>> {
    const urlsPattern = Array.from(this.mockResponsesPut.keys());
    return this.httpMock(endpoint, urlsPattern, this.mockResponsesPut, {
      headers,
      body,
    });
  }

  onPatch<T>(urlPattern: string, mockFnc: MockAdapterResponseFnc<T>): void {
    this.mockResponsesPatch.set(urlPattern, mockFnc);
  }

  patch<T>({
    endpoint,
    headers,
    body,
  }: HttpRequest): Observable<HttpResponse<T>> {
    const urlsPattern = Array.from(this.mockResponsesPatch.keys());
    return this.httpMock(endpoint, urlsPattern, this.mockResponsesPatch, {
      headers,
      body,
    });
  }

  onDelete<T>(urlPattern: string, mockFnc: MockAdapterResponseFnc<T>): void {
    this.mockResponsesDelete.set(urlPattern, mockFnc);
  }

  delete<T>({
    endpoint,
    headers,
  }: HttpDeleteRequest): Observable<HttpResponse<T>> {
    const urlsPattern = Array.from(this.mockResponsesDelete.keys());
    return this.httpMock(endpoint, urlsPattern, this.mockResponsesDelete, {
      headers,
    });
  }
}
