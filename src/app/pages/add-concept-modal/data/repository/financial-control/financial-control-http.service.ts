import { Injectable, inject } from '@angular/core';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';
import { AddConceptRequestModel } from './model/request/AddConceptRequestModel';
import { environment } from 'src/environments/environment';
import { FinancialControlInterfaceService } from './financial-control-interface.service';

const { baseUrl, FinancialControlAPI } = environment.endpoints;

@Injectable()
export class FinancialControlHttpService
  implements FinancialControlInterfaceService
{
  http = inject(HttpInterfaceService);

  addIncome(requestModel: AddConceptRequestModel): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint:
            baseUrl +
            FinancialControlAPI.addExpense.replace(':accountNumber', '0'),
          body: {
            conceptId: requestModel.conceptId,
            amount: requestModel.amount,
            date: requestModel.date,
            note: requestModel.note,
          },
        })
        .subscribe({
          next: (response) => {
            try {
              switch (response.status) {
                case 200:
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

  addExpense(requestModel: AddConceptRequestModel): Promise<void> {
    return new Promise((resolve, reject) => {
      return this.http
        .post({
          endpoint:
            baseUrl +
            FinancialControlAPI.addExpense.replace(':accountNumber', '0'),
          body: {
            conceptId: requestModel.conceptId,
            amount: requestModel.amount,
            date: requestModel.date,
            note: requestModel.note,
          },
        })
        .subscribe({
          next: (response) => {
            try {
              switch (response.status) {
                case 200:
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
