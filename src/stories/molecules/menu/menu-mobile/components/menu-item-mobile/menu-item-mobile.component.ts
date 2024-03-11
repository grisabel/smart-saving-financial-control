import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { MenuItem } from '@stories/molecules/menu/shared/menu-item.types';

@Component({
  selector: 'app-menu-item-mobile',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './menu-item-mobile.component.html',
  styleUrls: ['./menu-item-mobile.component.scss'],
})
export class MenuItemMobileComponent {
  @Input() id!: MenuItem['id'];
  @Input() icon!: MenuItem['icon'];
  @Input() title!: MenuItem['title'];
  @Input() active?: MenuItem['active'] = false;

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
}
