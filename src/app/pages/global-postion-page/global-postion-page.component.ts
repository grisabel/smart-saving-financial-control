import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { GlobalPositionInterfaceService } from './repository/global-position-interface.service';

@Component({
  selector: 'app-global-postion-page',
  templateUrl: './global-postion-page.component.html',
  styleUrls: ['./global-postion-page.component.scss'],
})
export class GlobalPostionPageComponent implements OnInit {
  openIncome = signal(false);
  openExpense = signal(false);

  constructor(
    private router: Router,
    private globalPostionService: GlobalPositionInterfaceService
  ) {}

  ngOnInit(): void {
    this.globalPostionService
      .register({
        dateBirth: '',
        email: '',
        firstName: '',
        lastName: '',
        objetive: '',
        password: '',
        repeatEmail: '',
        repeatPassword: '',
      })
      .then((resul) => {
        console.log(resul);
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  handlerCategory() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories]);
  }
}
