import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPostionPageComponent } from './global-postion-page.component';

const routes: Routes = [{ path: '', component: GlobalPostionPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalPostionPageRoutingModule {}
