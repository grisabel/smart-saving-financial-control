import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '@stories/atoms/icon/icon.component';

interface InputOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input({ required: true }) id!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() options: InputOption[] = [];
  @Input() value?: string | null;
  @Output() onChange: EventEmitter<InputEvent> = new EventEmitter<InputEvent>();

  @ViewChild('dropdownRef') dropdownRef!: ElementRef<HTMLDivElement>;

  openDropdown: boolean = false;
  inputText: string = '';
  optionFocus: number = -1;

  constructor() {}

  ngOnInit() {
    this.inputText = this._defaultOptionLabel(this.options, this.value);
    this.optionFocus = this._defaultOptionFocus(this.options, this.value);
  }

  _defaultOptionFocus(
    options: InputOption[],
    defaultValue?: string | null
  ): number {
    if (!defaultValue) return -1;

    let find = false;
    let resul = -1;
    for (let i = 0; i < options.length && !find; i++) {
      const option = options[i];
      if (option.value == defaultValue) {
        find = true;
        resul = i;
      }
    }

    return resul;
  }

  _defaultOptionLabel(
    options: InputOption[],
    defaultValue?: string | null
  ): string {
    if (!defaultValue) return '';

    let find = false;
    let resul = '';
    for (let i = 0; i < options.length && !find; i++) {
      const option = options[i];
      if (option.value == defaultValue) {
        find = true;
        resul = option.label;
      }
    }

    return resul;
  }

  _handleKeyUpDropdownItem() {
    if (this.optionFocus <= 1) {
      this.optionFocus = 0;
      return;
    }
    this.optionFocus = this.optionFocus - 1;
    return;
  }

  _handleKeyDownDropdownItem(optionsLength: number) {
    if (this.optionFocus === optionsLength - 1) {
      this.optionFocus = optionsLength - 1;
      return;
    }
    this.optionFocus = this.optionFocus + 1;
    return;
  }

  handleKeyDropdown(event: KeyboardEvent) {
    event.preventDefault();

    if (event.code === 'ArrowDown') {
      this._handleKeyDownDropdownItem(this.options.length);
    } else if (event.code === 'ArrowUp') {
      this._handleKeyUpDropdownItem();
    } else if (event.code === 'Enter') {
      if (this.options && this.optionFocus !== -1) {
        this.onClickDropdownItem(this.options[this.optionFocus]);
        this.dropdownRef?.nativeElement?.blur();
      }
    }
  }

  onClickDropdownItem(option: InputOption) {
    this.inputText = option.label;
    this.dropdownRef?.nativeElement?.blur();

    this.onChange.emit({
      target: { value: option.value },
    } as unknown as InputEvent);
  }

  onResetDropdown(event: MouseEvent) {
    event.stopPropagation();

    this.inputText = '';
    this.optionFocus = -1;
    this.dropdownRef?.nativeElement?.blur();

    this.onChange.emit({
      target: { value: '' },
    } as unknown as InputEvent);
  }
}
