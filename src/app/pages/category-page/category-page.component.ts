import { Component, Input, WritableSignal, signal } from '@angular/core';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { CategoryService } from './repository/Category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent {
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  href = this.router.getCurrentNavigation()?.extras?.state?.['isGlobalPosition']
    ? GLOBAL_APP_ROUTES.globalPosition
    : GLOBAL_APP_ROUTES.myAccount;

  labelLink = 'Categorías';

  currentTab = signal(0);

  incomes = this.categoryService.getIcomeList().map((c) => c.icon);
  expenses = this.categoryService.getExpenseList().map((c) => c.icon);
}
