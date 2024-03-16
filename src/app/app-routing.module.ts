import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app-routes';

const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.globalPosition, pathMatch: 'full' },
  {
    path: APP_ROUTES.globalPosition,
    loadChildren: () =>
      import('./pages/global-postion-page/global-postion-page.module').then(
        (m) => m.GlobalPostionPageModule
      ),
  },
  {
    path: APP_ROUTES.categories,
    loadChildren: () =>
      import('./pages/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      ),
  },
  {
    path: APP_ROUTES.accountDetail,
    loadChildren: () =>
      import('./pages/account-detail/account-detail.module').then(
        (m) => m.AccountDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
