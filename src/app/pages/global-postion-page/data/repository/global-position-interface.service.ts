import { Injectable } from '@angular/core';
import { RegisterRequestModel } from './model/request/RegisterRequestModel';

@Injectable()
export abstract class GlobalPositionInterfaceService {
  abstract register(requestModel: RegisterRequestModel): Promise<void>;
}
