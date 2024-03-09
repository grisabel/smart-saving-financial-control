import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBaseComponent } from '@stories/atoms/inputs/input-base/input-base.component';
import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule, InputBaseComponent, IconComponent],
  templateUrl: './input-password.component.html',
  styleUrls: [],
})
export class InputPasswordComponent {
  @Input() id?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() value?: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  type = 'password';
  hide: boolean = true;

  handleHide(): void {
    this.hide = !this.hide;
    this.type = this.hide ? 'password' : 'text';
  }
}
