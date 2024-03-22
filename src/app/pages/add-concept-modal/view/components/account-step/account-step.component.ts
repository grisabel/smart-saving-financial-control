import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-account-step',
  templateUrl: './account-step.component.html',
  styleUrls: ['./account-step.component.scss'],
})
export class AccountStepComponent {
  label: string = '';
  placeholder: string = '';
  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    this.translations();
  }

  private translations() {
    this.translocoService
      .selectTranslate('input-account-label')
      .subscribe((traduccion: string) => {
        this.label = traduccion;
      });
    this.translocoService
      .selectTranslate('input-account-placeholder')
      .subscribe((traduccion: string) => {
        this.placeholder = traduccion;
      });
  }
}
