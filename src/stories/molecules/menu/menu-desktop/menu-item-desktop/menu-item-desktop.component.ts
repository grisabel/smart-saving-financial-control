import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../shared/menu-item.types';
import { IconComponent } from '@stories/atoms/icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item-desktop',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './menu-item-desktop.component.html',
  styleUrls: ['./menu-item-desktop.component.scss'],
})
export class MenuItemDesktopComponent {
  @Input() id!: MenuItem['id'];
  @Input() icon!: MenuItem['icon'];
  @Input() title!: MenuItem['title'];
  @Input() active?: MenuItem['active'] = false;

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
}
