import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesReportWpComponent } from './page/categories-report-wp/categories-report-wp.component';
import { ACCOUNT_DETAIL_ROUTES } from './account-detail.routes';
import { CategoriesDetailsReportWpComponent } from './page/categories-details-report-wp/categories-details-report-wp.component';

const routes: Routes = [
  { path: '', redirectTo: ACCOUNT_DETAIL_ROUTES.summary, pathMatch: 'full' },
  {
    path: ACCOUNT_DETAIL_ROUTES.summary,
    component: CategoriesReportWpComponent,
  },
  {
    path: ACCOUNT_DETAIL_ROUTES.detail,
    component: CategoriesDetailsReportWpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailRoutingModule {}
