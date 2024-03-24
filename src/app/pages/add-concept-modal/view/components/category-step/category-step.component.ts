import { Component, Input, OnInit } from '@angular/core';
import {
  CategoryModel,
  CategoryService,
} from '@app/pages/category-page/repository/Category/category.service';
import { AddConceptStoreService } from '../../store/add-concept-store.service';

@Component({
  selector: 'app-category-step',
  templateUrl: './category-step.component.html',
  styleUrls: ['./category-step.component.scss'],
})
export class CategoryStepComponent implements OnInit {
  categories: CategoryModel[] = [];
  icons: string[] = [];

  categorySelected: string = '';
  categorySelectedId!: string | null;

  category: string = 'input-category-label';
  colorCategory: string = '#E0E0E0';

  @Input() titleOpen: string = '';
  readOnly = true;

  constructor(
    private categoryService: CategoryService,
    private addConceptStoreService: AddConceptStoreService
  ) {}

  ngOnInit(): void {
    this.categorySelectedId = this.addConceptStoreService.conceptId();
    this.categorySelected = this.categories.reduce((acc, c) => {
      if (c.id === this.categorySelectedId) {
        return c.icon;
      }
      return acc;
    }, '');
  }

  ngOnChanges(): void {
    if (this.titleOpen === 'openIncome') {
      this.categories = this.categoryService.getIcomeList();
      this.icons = this.categories.map((c) => c.icon);
    } else {
      this.categories = this.categoryService.getExpenseList();
      this.icons = this.categories.map((c) => c.icon);
    }
  }

  handleClickCategory(event: any) {
    this.categorySelected = event.icon;
    this.colorCategory = event.background;
    this.categorySelectedId = this.categories.reduce((acc, c) => {
      if (c.icon === event.icon) {
        return c.id;
      }
      return acc;
    }, '');

    this.addConceptStoreService.conceptId.set(this.categorySelectedId);
  }
}
