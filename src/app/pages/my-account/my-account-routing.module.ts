import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { MY_ACCOUNT_ROUTES } from './my-account.routes';
import { MyAccountDetailsComponent } from './page/my-account-details/my-account-details.component';

const routes: Routes = [
  { path: '', component: MyAccountComponent },
  {
    path: MY_ACCOUNT_ROUTES.myAccountInfoDetails,
    component: MyAccountDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
