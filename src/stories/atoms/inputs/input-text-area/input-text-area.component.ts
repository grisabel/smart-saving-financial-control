import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-text-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
})
export class InputTextAreaComponent {
  @Input({ required: true }) id!: string;

  @Input() label?: string;
  @Input() placeholder?: string;

  @Input() value?: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  handleChange(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }

  ngOnChanges(changes: any) {
    console.log({ changes });
  }
}
