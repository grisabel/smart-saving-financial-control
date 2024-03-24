import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBaseComponent } from '../input-base/input-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { MaskitoOptions } from '@maskito/core';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, InputBaseComponent, IconComponent],
  templateUrl: './input-number.component.html',
  styleUrls: [],
})
export class InputNumberComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() value?: number;
  @Input() disabled?: boolean;
  @Input() name?: string;
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();

  readonly optionsMask: MaskitoOptions = maskitoNumberOptionsGenerator({
    precision: 2,
    decimalSeparator: ',',
  });

  handleChange($event: any) {
    this.onChange.emit($event);
  }
}
