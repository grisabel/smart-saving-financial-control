import { Injectable } from '@angular/core';
import { AddConceptRequestModel } from './model/request/AddConceptRequestModel';

@Injectable()
export abstract class FinancialControlInterfaceService {
  abstract addIncome(requestModel: AddConceptRequestModel): Promise<void>;
  abstract addExpense(requestModel: AddConceptRequestModel): Promise<void>;
}
