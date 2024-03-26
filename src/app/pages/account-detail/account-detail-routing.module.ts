import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail.component';

import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

const routes: Routes = [
  { path: '', component: AccountDetailComponent },
  {
    path: '1',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4202/assets/remoteReportsMfe.js',
      exposedModule: './CategoriesReport',

      elementName: 'categories-report-mfe',
    } as WebComponentWrapperOptions,
  },
  {
    path: '2',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry: 'http://localhost:4202/assets/remoteReportsMfe.js',
      exposedModule: './CategoriesDetailsReport',

      elementName: 'categories-details-report-mfe',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailRoutingModule {}
