import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { BackLinkComponent } from '@stories/atoms/links/back-link/back-link.component';
import { UserInfoComponent } from '@stories/atoms/user-info/user-info.component';
import { ActionBtnComponent } from '@stories/atoms/buttons/action-btn/action-btn.component';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    BackLinkComponent,
    UserInfoComponent,
    ActionBtnComponent,
  ],
})
export class MyAccountModule {}
