import { Injectable } from '@angular/core';
import { LogoutRequestModel } from './model/request/LogoutRequestModel';

@Injectable()
export abstract class SessionInterfaceService {
  abstract logout(requestModel: LogoutRequestModel): Promise<void>;
}
