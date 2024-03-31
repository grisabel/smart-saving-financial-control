import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail.component';

import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { CategoriesReportWpComponent } from './page/categories-report-wp/categories-report-wp.component';
import { ACCOUNT_DETAIL_ROUTES } from './account-detail.routes';

const routes: Routes = [
  { path: '', redirectTo: ACCOUNT_DETAIL_ROUTES.summary, pathMatch: 'full' },
  {
    path: ACCOUNT_DETAIL_ROUTES.summary,
    component: CategoriesReportWpComponent,
    // component: WebComponentWrapper,
    // data: {
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4202/assets/remoteReportsMfe.js',
    //   exposedModule: './CategoriesReport',

    //   elementName: 'categories-report-mfe',
    // } as WebComponentWrapperOptions,
  },
  {
    path: ACCOUNT_DETAIL_ROUTES.detail,
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
