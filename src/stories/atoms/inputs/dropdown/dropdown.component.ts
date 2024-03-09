import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InputOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input({ required: true }) id!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() options: InputOption[] = [];
  @Input() value?: string | null;
  @Output() omChange: EventEmitter<string> = new EventEmitter<string>();

  openDropdown: boolean = false;
  inputText: string = '';
  optionFocus: number = -1;

  constructor() {}

  ngOnInit() {
    this.inputText = this.defaultOptionLabel(this.options, this.value);
    this.optionFocus = this.defaultOptionFocus(this.options, this.value);
  }

  defaultOptionFocus(
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

  defaultOptionLabel(
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

  handleKeyUpDropdownItem() {
    if (this.optionFocus <= 1) {
      this.optionFocus = 0;
      return;
    }
    this.optionFocus = this.optionFocus - 1;
    return;
  }

  handleKeyDownDropdownItem(optionsLength: number) {
    if (this.optionFocus === optionsLength - 1) {
      this.optionFocus = optionsLength - 1;
      return;
    }
    this.optionFocus = this.optionFocus + 1;
    return;
  }

  handleKeyDropdown(event: KeyboardEvent) {
    // Angular version of the keyboard event handling
  }

  onClickDropdownItem(option: InputOption) {
    // Angular version of the click handling
  }

  onResetDropdown() {
    // Angular version of the reset handling
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event) {
    // Close dropdown when clicking outside, similar to onBlur in React
  }
}
