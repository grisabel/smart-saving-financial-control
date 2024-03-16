import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { BalanceConceptComponent } from './balance-concept/balance-concept.component';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardBaseComponent, BalanceConceptComponent],
})
export class AccountCardComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
