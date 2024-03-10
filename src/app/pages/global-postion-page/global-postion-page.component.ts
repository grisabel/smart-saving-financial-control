import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';

@Component({
  selector: 'app-global-postion-page',
  templateUrl: './global-postion-page.component.html',
  styleUrls: ['./global-postion-page.component.scss'],
})
export class GlobalPostionPageComponent {
  openIncome = signal(false);
  openExpense = signal(false);

  constructor(private router: Router) {}

  handlerCategory() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }
}
