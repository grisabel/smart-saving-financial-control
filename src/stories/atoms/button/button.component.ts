import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color?: 'primary' | 'secondary' = 'primary';
  @Input() type?: 'button' | 'submit' = 'button';
  @Input() disabled?: boolean = false;
  @Input() loading?: boolean = false;

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    if (this.loading) return;
    this.onClick.emit();
  }
}
