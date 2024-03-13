import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HttpDeleteRequest,
  HttpGetRequest,
  HttpInterfaceService,
  HttpPatchRequest,
  HttpPostRequest,
  HttpPutRequest,
  HttpResponse,
} from './interfaces/HttpInterfaceService';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService implements HttpInterfaceService {
  constructor(private http: HttpClient) {}

  get<T>({ endpoint, headers }: HttpGetRequest): Observable<HttpResponse<T>> {
    return this.http.get<HttpResponse<T>>(endpoint, { headers });
  }

  post<T>({
    endpoint,
    body,
    headers,
  }: HttpPostRequest): Observable<HttpResponse<T>> {
    return this.http.post<HttpResponse<T>>(endpoint, body, { headers });
  }

  put<T>({
    endpoint,
    body,
    headers,
  }: HttpPutRequest): Observable<HttpResponse<T>> {
    return this.http.put<HttpResponse<T>>(endpoint, body, { headers });
  }

  patch<T>({
    endpoint,
    headers,
    body,
  }: HttpPatchRequest): Observable<HttpResponse<T>> {
    return this.http.patch<HttpResponse<T>>(endpoint, body, { headers });
  }

  delete<T>({
    endpoint,
    headers,
  }: HttpDeleteRequest): Observable<HttpResponse<T>> {
    return this.http.delete<HttpResponse<T>>(endpoint, { headers });
  }
}
