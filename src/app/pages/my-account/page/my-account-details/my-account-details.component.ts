import { Component } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { CommonStoreService } from '@app/store/Common/common-store.service';

@Component({
  selector: 'app-my-account-details',
  templateUrl: './my-account-details.component.html',
  styleUrls: ['./my-account-details.component.scss'],
})
export class MyAccountDetailsComponent {
  constructor(private commonStore: CommonStoreService) {}
  userInfo$ = toObservable(this.commonStore.userInfo);

  href = GLOBAL_APP_ROUTES.myAccount;
}
