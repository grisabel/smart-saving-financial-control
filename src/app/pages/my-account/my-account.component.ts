import { Component } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { CommonStoreService } from '@app/store/Common/common-store.service';
import {
  GLOBAL_MY_ACCOUNT_ROUTES,
  MY_ACCOUNT_ROUTES,
} from './my-account.routes';
import { SessionUseCaseService } from '@app/domain/Session/session-use-case.service';
import { TranslocoService } from '@ngneat/transloco';

const SRC_USER = '/assets/images/profile.png';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent {
  constructor(
    private router: Router,
    private commonStore: CommonStoreService,
    private sessionUseCase: SessionUseCaseService,
    private translocoService: TranslocoService
  ) {}

  href = GLOBAL_APP_ROUTES.globalPosition;
  disabled = false;
  src = SRC_USER;
  userInfo$ = toObservable(this.commonStore.userInfo);
  value: string = '';

  ngOnInit() {
    this.value = window.localStorage.getItem('language') || 'es';
  }

  handleClickCategories() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }

  handleNavigateInfo() {
    this.router.navigate([GLOBAL_MY_ACCOUNT_ROUTES.myAccountInfoDetails]);
  }

  //todo llamada servicio unsubscribe y redirigir a login
  handleClickUnsubscribe() {}

  handleClickLogout() {
    this.sessionUseCase.logout();
  }

  handleChangeLanguage($event: any) {
    let language = $event.target?.value;
    this.value = language;

    window.localStorage.setItem('language', language);
    this.translocoService.setActiveLang(language);
  }
}
