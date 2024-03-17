import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum BalanceConceptEnum {
  income = 'income',
  expense = 'expense',
}

type EnumToType<T> = {
  [key in keyof T]: T[key];
}[keyof T];

@Component({
  selector: 'app-balance-concept',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-concept.component.html',
  styleUrls: ['./balance-concept.component.scss'],
})
export class BalanceConceptComponent {
  @Input() concept!: EnumToType<BalanceConceptEnum>;

  ngOnChanges(changes: any) {
    console.log(changes);
  }
}
