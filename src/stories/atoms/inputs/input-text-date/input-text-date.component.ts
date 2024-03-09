import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBaseComponent } from '@stories/atoms/inputs/input-base/input-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-input-text-date',
  standalone: true,
  imports: [CommonModule, InputBaseComponent, IconComponent],
  templateUrl: './input-text-date.component.html',
  styleUrls: [],
})
export class InputTextDateComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() value?: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
}
