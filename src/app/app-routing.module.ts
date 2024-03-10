import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app-routes';

const routes: Routes = [
  {
    path: APP_ROUTES.categories,
    loadChildren: () =>
      import('./pages/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
