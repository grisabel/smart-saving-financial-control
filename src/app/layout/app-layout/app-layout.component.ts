import {
  Component,
  HostListener,
  Input,
  TemplateRef,
  signal,
} from '@angular/core';
import { MenuItem } from '@stories/molecules/menu/shared/menu-item.types';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  isMobile = signal(true);
  @Input() content!: TemplateRef<any>;

  initialActive: string = 'finanzas';
  items: MenuItem[] = [
    { id: 'finanzas', icon: 'financial', title: 'Finanzas' },
    { id: 'herramientas', icon: 'tools', title: 'Herramienta' },
    { id: 'contenido', icon: 'book', title: 'Contenido' },
    { id: 'mi-cuenta', icon: 'account', title: 'Mi cuente' },
  ];

  ngOnInit() {
    this.checkMediaQuery();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMediaQuery();
  }

  checkMediaQuery() {
    // Todo
    const tabletMediaQuery = window.matchMedia('(min-width: 768px)');

    if (tabletMediaQuery.matches) {
      this.isMobile.set(false);
    } else {
      this.isMobile.set(true);
    }
  }
}
