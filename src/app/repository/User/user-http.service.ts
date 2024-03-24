import { Injectable, inject } from '@angular/core';
import { UserInterfaceService } from './user-interface.service';
import { UserInfoResponseModel } from './model/response/UserInfoResponseModel';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';
import { environment } from 'src/environments/environment';

const { baseUrl, UserAPI } = environment.endpoints;

@Injectable()
export class UserHttpService implements UserInterfaceService {
  http = inject(HttpInterfaceService);

  info(): Promise<UserInfoResponseModel> {
    {
      return new Promise((resolve, reject) => {
        return this.http
          .get<UserInfoResponseModel>({
            endpoint: baseUrl + UserAPI.info,
          })
          .subscribe({
            next: (response) => {
              try {
                switch (response.status) {
                  case 200:
                    resolve(response.body as UserInfoResponseModel);
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
