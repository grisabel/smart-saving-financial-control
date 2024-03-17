import { Component } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { CommonStoreService } from '@app/store/Common/common-store.service';
import {
  GLOBAL_MY_ACCOUNT_ROUTES,
  MY_ACCOUNT_ROUTES,
} from './my-account.routes';

const SRC_USER =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent {
  constructor(
    private router: Router,
    private commonStore: CommonStoreService
  ) {}

  href = GLOBAL_APP_ROUTES.globalPosition;
  labelLink = 'Mi Cuenta';

  src = SRC_USER;
  userInfo$ = toObservable(this.commonStore.userInfo);

  //todo traducciones
  categories = 'Categorías';
  unsubscribe = 'Darse de baja';
  logout = 'Cerrar Sesión';
  accountInfoDetails = 'Mis Datos';

  handleClickCategories() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }

  handleNavigateInfo() {
    this.router.navigate([GLOBAL_MY_ACCOUNT_ROUTES.myAccountInfoDetails]);
  }

  //todo llamada servicio unsubscribe y redirigir a login
  handleClickUnsubscribe() {}

  //todo llamada servicio logout y redirigir a login
  handleClickLogout() {}
}
