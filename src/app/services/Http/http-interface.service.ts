import { Injectable } from '@angular/core';
import {
  HttpDeleteRequest,
  HttpGetRequest,
  HttpInterface,
  HttpRequest,
  HttpResponse,
} from './interfaces/HttpInterface';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HttpInterfaceService implements HttpInterface {
  abstract get<T>({
    endpoint,
    headers,
  }: HttpGetRequest): Observable<HttpResponse<T>>;
  abstract post<T>({
    endpoint,
    body,
    headers,
  }: HttpRequest): Observable<HttpResponse<T>>;
  abstract put<T>({
    endpoint,
    body,
    headers,
  }: HttpRequest): Observable<HttpResponse<T>>;
  abstract patch<T>({
    endpoint,
    headers,
    body,
  }: HttpRequest): Observable<HttpResponse<T>>;
  abstract delete<T>({
    endpoint,
    headers,
  }: HttpDeleteRequest): Observable<HttpResponse<T>>;
}
