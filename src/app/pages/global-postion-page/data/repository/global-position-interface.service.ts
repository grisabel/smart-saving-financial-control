import { Injectable } from '@angular/core';
import { GPSummaryRequestModel } from './model/request/GPSummaryRequestModel';
import { GPSummaryResponseModel } from './model/response/GPSummaryResponseModel';

@Injectable()
export abstract class GlobalPositionInterfaceService {
  abstract summary(
    requestModel: GPSummaryRequestModel
  ): Promise<GPSummaryResponseModel>;
}
