import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input({ required: true }) open!: Signal<boolean>;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input({ required: true }) title!: string;
  @Input() description?: string;

  @Input() confirmBtn?: { text: string; isLoading?: boolean };
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  @Input() cancelBtn?: { text: string; isLoading?: boolean };
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
}
