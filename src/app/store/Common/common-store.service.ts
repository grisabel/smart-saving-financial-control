import { Injectable, signal } from '@angular/core';
import { UserInfoResponseModel } from '@app/repository/User/model/response/UserInfoResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CommonStoreService {
  userInfo = signal<UserInfoResponseModel | null>(null);
}
