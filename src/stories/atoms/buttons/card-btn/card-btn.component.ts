import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-card-btn',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent],
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.scss'],
})
export class CardBtnComponent {
  @Input() title: string = '';
  @Input() iconName: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
