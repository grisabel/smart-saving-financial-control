import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss'],
})
export class InputBaseComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) type!: 'email' | 'password' | 'text' | 'number';

  @Input() label?: string;
  @Input() placeholder?: string;

  @Input() value?: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  handleChange(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }
}
