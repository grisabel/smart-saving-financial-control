import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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
import { environment } from 'src/environments/environment';
import { LOCAL_STORAGE_KEYS } from '@app/domain/Session/session-use-case.service';

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

  private logout() {
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken);
    document.location.href = environment.data.logoutUrl;
  }

  setAccessToken = (value: string | null) => {
    this.access_token = value;
  };

  get<T>({ endpoint, headers }: HttpGetRequest): Observable<HttpResponse<T>> {
    return this.http
      .get<T>(endpoint, {
        headers: {
          ...this.createAuthHeaders(),
          ...headers,
        },
        observe: 'response',
      })
      .pipe(
        tap((response) => {
          debugger;
          console.log({ response });
          if (response.status === 401) {
            this.logout();
          }
        })
      );
  }

  post<T>({
    endpoint,
    body,
    headers,
  }: HttpPostRequest): Observable<HttpResponse<T>> {
    return this.http
      .post<T>(endpoint, body, {
        headers: {
          ...this.createAuthHeaders(),
          ...headers,
        },
        observe: 'response',
      })
      .pipe(
        tap({
          error: (response) => {
            if (response.status === 401) {
              this.logout();
            }
          },
        })
      );
  }

  put<T>({
    endpoint,
    body,
    headers,
  }: HttpPutRequest): Observable<HttpResponse<T>> {
    return this.http
      .put<T>(endpoint, body, {
        headers: {
          ...this.createAuthHeaders(),
          ...headers,
        },
        observe: 'response',
      })
      .pipe(
        tap({
          error: (response) => {
            if (response.status === 401) {
              this.logout();
            }
          },
        })
      );
  }

  patch<T>({
    endpoint,
    headers,
    body,
  }: HttpPatchRequest): Observable<HttpResponse<T>> {
    return this.http
      .patch<T>(endpoint, body, {
        headers: {
          ...this.createAuthHeaders(),
          ...headers,
        },
        observe: 'response',
      })
      .pipe(
        tap({
          error: (response) => {
            if (response.status === 401) {
              this.logout();
            }
          },
        })
      );
  }

  delete<T>({
    endpoint,
    headers,
  }: HttpDeleteRequest): Observable<HttpResponse<T>> {
    return this.http
      .delete<T>(endpoint, {
        headers: {
          ...this.createAuthHeaders(),
          ...headers,
        },
        observe: 'response',
      })
      .pipe(
        tap({
          error: (response) => {
            if (response.status === 401) {
              this.logout();
            }
          },
        })
      );
  }
}
