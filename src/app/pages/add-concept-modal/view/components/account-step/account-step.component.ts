import { Component } from '@angular/core';

@Component({
  selector: 'app-account-step',
  templateUrl: './account-step.component.html',
  styleUrls: ['./account-step.component.scss'],
})
export class AccountStepComponent {
  label = 'Cuenta';
  placeholder = 'Cuenta Principal';
}
