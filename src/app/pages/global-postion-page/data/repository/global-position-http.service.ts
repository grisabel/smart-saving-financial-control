import { Injectable, inject } from '@angular/core';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';
import { GPSummaryRequestModel } from './model/request/GPSummaryRequestModel';
import { environment } from 'src/environments/environment';
import { GlobalPositionInterfaceService } from './global-position-interface.service';
import { GPSummaryResponseModel } from './model/response/GPSummaryResponseModel';

const { baseUrl, GlobalPositionAPI } = environment.endpoints;

@Injectable()
export class GlobalPositionHttpService
  implements GlobalPositionInterfaceService
{
  http = inject(HttpInterfaceService);

  summary(
    requestModel: GPSummaryRequestModel
  ): Promise<GPSummaryResponseModel> {
    return new Promise((resolve, reject) => {
      return this.http
        .get<GPSummaryResponseModel>({
          endpoint:
            baseUrl +
            GlobalPositionAPI.summary
              .replace(':accountNumber', '0')
              .replace(':year', requestModel.year),
        })
        .subscribe({
          next: (response) => {
            try {
              switch (response.status) {
                case 204:
                  resolve(response.body as GPSummaryResponseModel);
                  break;

                default:
                  reject();
                  break;
              }
            } catch (error) {
              console.log('Error in response.json()');
              reject();
            }
          },
          error: (error) => {
            console.error(
              'There has been a problem with your fetch operation:',
              error
            );
            reject();
          },
        });
    });
  }
}
