import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-circle-btn',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './circle-btn.component.html',
  styleUrls: ['./circle-btn.component.scss'],
})
export class CircleBtnComponent {
  @Input() iconName: string = '';
  @Input() disabled?: boolean;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
