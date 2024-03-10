import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemMobileComponent } from './components/menu-item-mobile/menu-item-mobile.component';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, MenuItemMobileComponent],
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  currentId = signal('0');

  //id
  //icon
  //title
  //click
}
