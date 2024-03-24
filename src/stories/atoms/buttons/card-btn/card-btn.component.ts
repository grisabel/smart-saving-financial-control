import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-card-btn',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent, TranslocoModule],
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.scss'],
})
export class CardBtnComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
