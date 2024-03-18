import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getIcomeList(): string[] {
    return ['paylist', 'revenues', 'scholarship', 'bets'];
  }

  getExpenseList(): string[] {
    return [
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
