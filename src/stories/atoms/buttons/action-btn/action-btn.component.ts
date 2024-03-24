import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBaseComponent } from '@stories/atoms/card/card-base/card-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-action-btn',
  standalone: true,
  imports: [CommonModule, CardBaseComponent, IconComponent],
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss'],
})
export class ActionBtnComponent {
  @Input() colorBtn?: string = 'primary | secundary = primary';
  @Input() iconName?: string = '';
  @Input() label: string = '';
  @Input() disabled?: boolean;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
