import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemMobileComponent } from './components/menu-item-mobile/menu-item-mobile.component';
import { MenuItem } from '../shared/menu-item.types';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, MenuItemMobileComponent],
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent implements OnChanges {
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
