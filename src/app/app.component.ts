import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from './app-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  openIncome = signal(false);
  openExpense = signal(false);

  constructor(private router: Router) {}

  handlerCategory() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }
}
