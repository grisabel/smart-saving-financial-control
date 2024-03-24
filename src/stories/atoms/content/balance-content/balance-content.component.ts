import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBaseComponent } from '../content-base/content-base.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-balance-content',
  standalone: true,
  imports: [CommonModule, ContentBaseComponent, TranslocoModule],
  templateUrl: './balance-content.component.html',
  styleUrls: ['./balance-content.component.scss'],
})
export class BalanceContentComponent {
  @Input() title!: string;
  @Input() amount!: string;

  @Input() type?: 'expense' | 'income';
}
