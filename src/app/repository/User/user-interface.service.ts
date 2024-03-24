import { Injectable } from '@angular/core';
import { UserInfoResponseModel } from './model/response/UserInfoResponseModel';

// TODO revisar app.module providers
@Injectable()
export abstract class UserInterfaceService {
  abstract info(): Promise<UserInfoResponseModel>;
}
