import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-step',
  templateUrl: './category-step.component.html',
  styleUrls: ['./category-step.component.scss'],
})
export class CategoryStepComponent {
  categories: string[] = [''];
  @Input() titleOpen: string = '';

  ngOnChanges(): void {
    if (this.titleOpen === 'openIncome') {
      this.categories = ['paylist', 'revenues', 'scholarship', 'bets'];
    } else {
      this.categories = [
        'mortgage',
        'food',
        'pets',
        'electricity',
        'fuel',
        'heating',
        'internet',
        'water',
        'studies',
        'leisure',
        'tax',
        'studies',
        'health',
        'insurance',
        'car',
      ];
    }
  }
}
