import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';

@Component({
  selector: 'app-input-base',
  standalone: true,
  imports: [CommonModule, MaskitoDirective],
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss'],
})
export class InputBaseComponent {
  @Input({ required: true }) id?: string;
  @Input({ required: true }) type!: 'email' | 'password' | 'text' | 'number';

  @Input() label?: string;
  @Input() placeholder?: string;

  @Input() value?: string | number = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() optionsMask?: MaskitoOptions;
  @Input() disabled?: boolean;
  @Input() maxlength?: number;

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }
}
