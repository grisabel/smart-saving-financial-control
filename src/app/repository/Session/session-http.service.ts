import { Injectable, inject } from '@angular/core';
import { SessionInterfaceService } from './session-interface.service';
import { LogoutRequestModel } from './model/request/LogoutRequestModel';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';
import { environment } from 'src/environments/environment';

const { baseUrl, SessionAPI } = environment.endpoints;

@Injectable()
export class SessionHttpService implements SessionInterfaceService {
  http = inject(HttpInterfaceService);

  logout(requestModel: LogoutRequestModel): Promise<void> {
    {
      return new Promise((resolve, reject) => {
        return this.http
          .post<void>({
            endpoint: baseUrl + SessionAPI.logout,
            body: {
              refreshToken: requestModel.refreshToken,
            },
          })
          .subscribe({
            next: (response) => {
              try {
                switch (response.status) {
                  case 201:
                    resolve();
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
}
