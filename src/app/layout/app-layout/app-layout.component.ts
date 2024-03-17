import {
  Component,
  HostListener,
  Input,
  TemplateRef,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { MenuItem } from '@stories/molecules/menu/shared/menu-item.types';

const MY_ACCOUNT_ID = 'mi-cuenta';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  isMobile = signal(true);
  @Input() content!: TemplateRef<any>;

  currentMenu = signal('finanzas');
  items: MenuItem[] = [
    { id: 'finanzas', icon: 'financial', title: 'Finanzas' },
    { id: 'herramientas', icon: 'tools', title: 'Herramienta' },
    { id: 'contenido', icon: 'book', title: 'Contenido' },
    { id: MY_ACCOUNT_ID, icon: 'account', title: 'Mi cuente' },
  ];
  logout: MenuItem[] = [
    { id: 'logout', icon: 'logout', title: 'Cerrar Sesión' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkMediaQuery();
  }

  handleMenuChange(id: string) {
    this.currentMenu.set(id);
    console.log({ id });
    switch (id) {
      case MY_ACCOUNT_ID:
        this.navigateMyAccount();
        break;

      default:
        break;
    }
  }

  navigateMyAccount() {
    this.router.navigate([GLOBAL_APP_ROUTES.myAccount]);
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
