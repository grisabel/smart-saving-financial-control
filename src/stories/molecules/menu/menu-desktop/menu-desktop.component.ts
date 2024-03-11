import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemDesktopComponent } from './menu-item-desktop/menu-item-desktop.component';
import { MenuItem } from '../shared/menu-item.types';

@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [CommonModule, MenuItemDesktopComponent],
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent {
  @Input() initialActive!: string;
  @Input() items: MenuItem[] = [];
  @Output() onChange: EventEmitter<string /*id*/> = new EventEmitter<string>();

  currentId = signal<null | string>(null);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialActive'] && changes['initialActive'].currentValue) {
      this.currentId.set(changes['initialActive'].currentValue);
    }
  }

  handleMenuChange(id: string) {
    this.currentId.set(id);
    this.onChange.emit(id);
  }
}
