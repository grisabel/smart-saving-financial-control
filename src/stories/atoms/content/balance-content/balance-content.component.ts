import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBaseComponent } from '../content-base/content-base.component';

@Component({
  selector: 'app-balance-content',
  standalone: true,
  imports: [CommonModule, ContentBaseComponent],
  templateUrl: './balance-content.component.html',
  styleUrls: ['./balance-content.component.scss'],
})
export class BalanceContentComponent {}
