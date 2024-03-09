import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, InputBaseComponent],
  templateUrl: './input-text.component.html',
  styleUrls: [],
})
export class InputTextComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() value?: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
}
