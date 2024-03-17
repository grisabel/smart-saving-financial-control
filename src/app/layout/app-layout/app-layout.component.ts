import {
  Component,
  HostListener,
  Input,
  TemplateRef,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { MenuItem } from '@stories/molecules/menu/shared/menu-item.types';
import { Subscription, filter } from 'rxjs';

const MY_ACCOUNT_ID = 'mi-cuenta';
const FINANCIAL_ID = 'finanzas';
@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  isMobile = signal(true);
  src =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  //todo El nombre y objetivo vendrán de un servicio
  userName = 'Pepe García Sánchez';
  objective = 'Jubilación';
  @Input() content!: TemplateRef<any>;

  currentMenu = signal(FINANCIAL_ID);
  items: MenuItem[] = [
    { id: FINANCIAL_ID, icon: 'financial', title: 'Finanzas' },
    { id: 'herramientas', icon: 'tools', title: 'Herramienta' },
    { id: 'contenido', icon: 'book', title: 'Contenido' },
    { id: MY_ACCOUNT_ID, icon: 'account', title: 'Mi cuente' },
  ];
  logout: MenuItem[] = [
    { id: 'logout', icon: 'logout', title: 'Cerrar Sesión' },
  ];

  private routerSubscription!: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.checkMediaQuery();

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_event) => {
        const event = _event as NavigationEnd;
        console.log('NavigationEnd:', event.url);
        this.checkCurrentMenu(event.url);
      });
  }

  private checkCurrentMenu(url: string) {
    if (url.startsWith(GLOBAL_APP_ROUTES.myAccount)) {
      this.currentMenu.set(MY_ACCOUNT_ID);
    }

    if (url.startsWith(GLOBAL_APP_ROUTES.globalPosition)) {
      this.currentMenu.set(FINANCIAL_ID);
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  handleMenuChange(id: string) {
    this.currentMenu.set(id);

    switch (id) {
      case FINANCIAL_ID:
        this.navigateFinancial();
        break;
      case MY_ACCOUNT_ID:
        this.navigateMyAccount();
        break;

      default:
        break;
    }
  }

  private navigateMyAccount() {
    this.router.navigate([GLOBAL_APP_ROUTES.myAccount]);
  }

  private navigateFinancial() {
    this.router.navigate([GLOBAL_APP_ROUTES.globalPosition]);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMediaQuery();
  }

  private checkMediaQuery() {
    // Todo
    const tabletMediaQuery = window.matchMedia('(min-width: 768px)');

    if (tabletMediaQuery.matches) {
      this.isMobile.set(false);
    } else {
      this.isMobile.set(true);
    }
  }
}
