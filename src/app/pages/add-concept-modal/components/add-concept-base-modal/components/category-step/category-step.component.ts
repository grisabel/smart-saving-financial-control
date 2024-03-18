import { Component, Input } from '@angular/core';
import { CategoryService } from '@app/pages/category-page/repository/Category/category.service';

@Component({
  selector: 'app-category-step',
  templateUrl: './category-step.component.html',
  styleUrls: ['./category-step.component.scss'],
})
export class CategoryStepComponent {
  categories: string[] = [''];
  categorySelected: string = 'Elija una de las categorías';
  category: string = 'Categoría';
  colorCategory: string = '#E0E0E0';
  @Input() titleOpen: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnChanges(): void {
    if (this.titleOpen === 'openIncome') {
      this.categories = this.categoryService.getIcomeList();
    } else {
      this.categories = this.categoryService.getExpenseList();
    }
  }

  handleClickCategory(event: any) {
    this.categorySelected = event.icon;
    this.colorCategory = event.background;
  }
}
