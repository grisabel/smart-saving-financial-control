import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardBaseComponent],
})
export class AccountCardComponent {}
