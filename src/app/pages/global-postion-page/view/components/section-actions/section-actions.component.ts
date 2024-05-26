import { Component, Input, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';

@Component({
  selector: 'app-section-actions',
  templateUrl: './section-actions.component.html',
  styleUrls: ['./section-actions.component.scss'],
})
export class SectionActionsComponent {
  @Input() openIncome!: WritableSignal<boolean>;
  @Input() openExpense!: WritableSignal<boolean>;

  constructor(private router: Router) {}

  handlerCategory() {
    this.router.navigate([GLOBAL_APP_ROUTES.categories], {
      state: { isGlobalPosition: true },
    });
  }
}
