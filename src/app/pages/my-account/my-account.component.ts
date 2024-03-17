import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GLOBAL_APP_ROUTES } from '@app/app-routes';

const SRC_USER =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent {
  href = '/global-position';
  labelLink = 'Mi Cuenta';

  src = SRC_USER;
  //todo El nombre y objetivo vendrán de un servicio
  userName = 'Pepe García Sánchez';
  objective = 'Jubilación';
  //todo traducciones
  categories = 'Categorías';
  mydata = 'Mis datos';
  unsubscribe = 'Darse de baja';
  logout = 'Cerrar Sesión';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  handleClickCategories() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }

  handleClickMyData() {
    this.router.navigate([GLOBAL_APP_ROUTES.accountDetail]);
  }

  //todo llamada servicio unsubscribe y redirigir a login
  handleClickUnsubscribe() {}

  //todo llamada servicio logout y redirigir a login
  handleClickLogout() {}
}
