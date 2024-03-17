import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalPositionInterfaceService } from '../data/repository/global-position-interface.service';

@Component({
  selector: 'app-global-postion-page',
  templateUrl: './global-postion-page.component.html',
  styleUrls: ['./global-postion-page.component.scss'],
})
export class GlobalPostionPageComponent implements OnInit {
  openIncome = signal(false);
  openExpense = signal(false);

  constructor(private globalPostionService: GlobalPositionInterfaceService) {}

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
      .then((resul: any) => {
        console.log(resul);
      })
      .catch((error: any) => {
        console.log({ error });
      });
  }
}
