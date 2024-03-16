import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { AccountDetailComponent } from './account-detail.component';


@NgModule({
  declarations: [
    AccountDetailComponent
  ],
  imports: [
    CommonModule,
    AccountDetailRoutingModule
  ]
})
export class AccountDetailModule { }
