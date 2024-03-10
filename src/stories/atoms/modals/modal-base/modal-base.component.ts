import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '@stories/atoms/icon/icon.component';
import { ButtonComponent } from '@stories/atoms/button/button.component';

@Component({
  selector: 'app-modal-base',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss'],
})
export class ModalBaseComponent {
  @Input({ required: true }) open!: Signal<boolean>;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input({ required: true }) title!: string;
  @Input() description?: string;

  @Input() confirmBtn?: { text: string; isLoading?: boolean };
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  @Input() cancelBtn?: { text: string; isLoading?: boolean };
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
}
