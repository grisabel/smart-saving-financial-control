import {
  Component,
  HostListener,
  Input,
  TemplateRef,
  signal,
  Inject,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { SessionUseCaseService } from '@app/domain/Session/session-use-case.service';
import { UserInfoResponseModel } from '@app/repository/User/model/response/UserInfoResponseModel';
import { CommonStoreService } from '@app/store/Common/common-store.service';
import { MenuItem } from '@stories/molecules/menu/shared/menu-item.types';
import { Subscription, filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APP_BASE_HREF } from '@angular/common';

const MY_ACCOUNT_ID = 'mi-cuenta';
const FINANCIAL_ID = 'finanzas';
const TOOLS_ID = 'herramientas';
const BLOG_ID = 'blog';
const SRC_USER = '/assets/images/profile.png';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  isMobile = signal(true);
  src = this.baseHref + SRC_USER;

  @Input() content!: TemplateRef<any>;

  currentMenu = signal(FINANCIAL_ID);
  items: MenuItem[] = [
    { id: FINANCIAL_ID, icon: 'financial', title: 'btn-finances' },
    { id: TOOLS_ID, icon: 'tools', title: 'btn-tool' },
    { id: BLOG_ID, icon: 'book', title: 'btn-content' },
    { id: MY_ACCOUNT_ID, icon: 'account', title: 'btn-my-account' },
  ];
  logout: MenuItem[] = [{ id: 'logout', icon: 'logout', title: 'btn-logout' }];

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private commonStore: CommonStoreService,
    private sessionUseCase: SessionUseCaseService,
    @Inject(APP_BASE_HREF) public baseHref: string
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
      case TOOLS_ID:
        this.navigateTools();
        break;
      case BLOG_ID:
        this.navigateBlog();
        break;

      default:
        break;
    }
  }

  handleLogout() {
    this.sessionUseCase.logout();
  }

  private navigateMyAccount() {
    this.router.navigate([GLOBAL_APP_ROUTES.myAccount]);
  }

  private navigateTools() {
    const language = window.localStorage.getItem('language');
    const urlRedirect = environment.data.toolsUrl.replace(
      ':language',
      language ?? 'es'
    );
    document.location.href = urlRedirect;
  }

  private navigateBlog() {
    document.location.href = environment.data.blogUrl;
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
