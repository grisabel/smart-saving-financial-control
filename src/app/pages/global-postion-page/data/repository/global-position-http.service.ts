import { Injectable, inject } from '@angular/core';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';
import { RegisterRequestModel } from './model/request/RegisterRequestModel';
import { environment } from 'src/environments/environment';

const { baseUrl, GlobalPositionAPI } = environment.endpoints;

@Injectable()
export class GlobalPositionHttpService {
  http = inject(HttpInterfaceService);

  register(requestModel: RegisterRequestModel): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint: baseUrl + GlobalPositionAPI.register,
          body: {
            firstName: requestModel.firstName,
            lastName: requestModel.lastName,
            dateBirth: requestModel.dateBirth,
            objetive: requestModel.objetive,
            email: requestModel.email,
            repeatEmail: requestModel.repeatEmail,
            password: requestModel.password,
            repeatPassword: requestModel.repeatPassword,
          },
        })
        .subscribe({
          next: (response) => {
            try {
              switch (response.status) {
                case 204:
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
