import { Component, WritableSignal, signal } from '@angular/core';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent {
  // openAddCategory: WritableSignal<boolean> = signal(false);
  href = GLOBAL_APP_ROUTES.globalPosition;
  labelLink = 'Categorias';

  currentTab = signal(0);
}
