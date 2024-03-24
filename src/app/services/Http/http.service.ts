import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpInterfaceService } from './http-interface.service';

import {
  HttpDeleteRequest,
  HttpGetRequest,
  HttpPatchRequest,
  HttpPostRequest,
  HttpPutRequest,
  HttpResponse,
} from './interfaces/HttpInterface';
import { BaseHttpHeader } from './model/request/BaseHttpHeader';

@Injectable()
export class HttpService implements HttpInterfaceService {
  constructor(private http: HttpClient) {}

  private access_token: string | null = null;

  private createAuthHeaders(): BaseHttpHeader {
    const baseAuthHttpHeader: BaseHttpHeader = {
      Authorization: `Bearer ${this.access_token}`,
    };

    return baseAuthHttpHeader;
  }

  setAccessToken = (value: string | null) => {
    this.access_token = value;
  };

  get<T>({ endpoint, headers }: HttpGetRequest): Observable<HttpResponse<T>> {
    return this.http.get<HttpResponse<T>>(endpoint, {
      headers: {
        ...this.createAuthHeaders(),
        ...headers,
      },
    });
  }

  post<T>({
    endpoint,
    body,
    headers,
  }: HttpPostRequest): Observable<HttpResponse<T>> {
    return this.http.post<HttpResponse<T>>(endpoint, body, {
      headers: {
        ...this.createAuthHeaders(),
        ...headers,
      },
    });
  }

  put<T>({
    endpoint,
    body,
    headers,
  }: HttpPutRequest): Observable<HttpResponse<T>> {
    return this.http.put<HttpResponse<T>>(endpoint, body, {
      headers: {
        ...this.createAuthHeaders(),
        ...headers,
      },
    });
  }

  patch<T>({
    endpoint,
    headers,
    body,
  }: HttpPatchRequest): Observable<HttpResponse<T>> {
    return this.http.patch<HttpResponse<T>>(endpoint, body, {
      headers: {
        ...this.createAuthHeaders(),
        ...headers,
      },
    });
  }

  delete<T>({
    endpoint,
    headers,
  }: HttpDeleteRequest): Observable<HttpResponse<T>> {
    return this.http.delete<HttpResponse<T>>(endpoint, {
      headers: {
        ...this.createAuthHeaders(),
        ...headers,
      },
    });
  }
}
