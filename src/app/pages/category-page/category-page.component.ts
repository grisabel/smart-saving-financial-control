import { Component, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent {
  openAddCategory: WritableSignal<boolean> = signal(false);

  constructor(private router: Router) {}

  handleBack() {
    this.router.navigate([GLOBAL_APP_ROUTES.globalPosition]);
  }
}
