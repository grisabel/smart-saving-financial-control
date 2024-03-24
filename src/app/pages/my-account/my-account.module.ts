import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { BackLinkComponent } from '@stories/atoms/links/back-link/back-link.component';
import { UserInfoComponent } from '@stories/atoms/user-info/user-info.component';
import { ActionBtnComponent } from '@stories/atoms/buttons/action-btn/action-btn.component';
import { MyAccountDetailsComponent } from './page/my-account-details/my-account-details.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [MyAccountComponent, MyAccountDetailsComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    BackLinkComponent,
    UserInfoComponent,
    ActionBtnComponent,
    TranslocoModule,
  ],
})
export class MyAccountModule {}
