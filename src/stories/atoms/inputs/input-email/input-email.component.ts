import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'app-input-email',
  standalone: true,
  imports: [CommonModule, InputBaseComponent],
  templateUrl: './input-email.component.html',
  styleUrls: [],
})
export class InputEmailComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() value?: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
}
