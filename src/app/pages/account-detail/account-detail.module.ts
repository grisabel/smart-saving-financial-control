import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { AccountDetailComponent } from './account-detail.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [AccountDetailComponent],
  imports: [CommonModule, AccountDetailRoutingModule, TranslocoModule],
})
export class AccountDetailModule {}
