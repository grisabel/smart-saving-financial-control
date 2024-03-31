import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailRoutingModule } from './account-detail-routing.module';
import { AccountDetailComponent } from './account-detail.component';
import { TranslocoModule } from '@ngneat/transloco';
import { CategoriesReportWpComponent } from './page/categories-report-wp/categories-report-wp.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
@NgModule({
  declarations: [AccountDetailComponent, CategoriesReportWpComponent],
  imports: [
    CommonModule,
    AccountDetailRoutingModule,
    TranslocoModule,
    ModuleFederationToolsModule,
  ],
})
export class AccountDetailModule {}
