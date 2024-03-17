import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';

@Component({
  selector: 'app-section-account',
  templateUrl: './section-account.component.html',
  styleUrls: ['./section-account.component.scss'],
})
export class SectionAccountComponent {
  constructor(private router: Router) {}

  handlerAccountDetails() {
    this.router.navigate([GLOBAL_APP_ROUTES.accountDetail]);
  }
}
