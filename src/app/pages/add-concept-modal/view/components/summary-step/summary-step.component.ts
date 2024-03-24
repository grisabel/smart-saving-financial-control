import { Component, OnInit } from '@angular/core';
import { AddConceptStoreService } from '../../store/add-concept-store.service';
import { CategoryService } from '@app/pages/category-page/repository/Category/category.service';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss'],
})
export class SummaryStepComponent implements OnInit {
  readOnly = true;
  disabled = true;

  valueDate = this.addConceptStoreService.date() ?? '';
  valueComment = this.addConceptStoreService.note() ?? '';
  valueAmount = this.addConceptStoreService.amount() ?? 0;
  categorySelected = '';

  constructor(
    private categoryService: CategoryService,
    private addConceptStoreService: AddConceptStoreService
  ) {}

  ngOnInit(): void {
    let categories = [];
    categories =
      this.addConceptStoreService.conceptType() === 'expense'
        ? this.categoryService.getExpenseList()
        : this.categoryService.getIcomeList();

    this.categorySelected = categories.reduce((acc, c) => {
      if (c.id === this.addConceptStoreService.conceptId()) {
        return c.icon;
      }
      return acc;
    }, '');
  }
}
