import {
  Component,
  HostListener,
  Input,
  TemplateRef,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { UserInfoResponseModel } from '@app/repository/User/model/response/UserInfoResponseModel';
import { CommonStoreService } from '@app/store/Common/common-store.service';
import { MenuItem } from '@stories/molecules/menu/shared/menu-item.types';
import { Subscription, filter } from 'rxjs';

const MY_ACCOUNT_ID = 'mi-cuenta';
const FINANCIAL_ID = 'finanzas';
const SRC_USER =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  isMobile = signal(true);
  src = SRC_USER;
  //todo El nombre y objetivo vendrán de un servicio
  userName = 'Pepe García Sánchez';
  objective = 'Jubilación';
  @Input() content!: TemplateRef<any>;

  currentMenu = signal(FINANCIAL_ID);
  items: MenuItem[] = [
    { id: FINANCIAL_ID, icon: 'financial', title: 'Finanzas' },
    { id: 'herramientas', icon: 'tools', title: 'Herramienta' },
    { id: 'contenido', icon: 'book', title: 'Contenido' },
    { id: MY_ACCOUNT_ID, icon: 'account', title: 'Mi cuenta' },
  ];
  logout: MenuItem[] = [
    { id: 'logout', icon: 'logout', title: 'Cerrar Sesión' },
  ];

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private commonStore: CommonStoreService
  ) {}

  userInfo$ = toObservable(this.commonStore.userInfo);

  ngOnInit() {
    this.checkMediaQuery();

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_event) => {
        const event = _event as NavigationEnd;
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
