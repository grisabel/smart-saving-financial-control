import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';
import { GLOBAL_ACCOUNT_DETAILS_ROUTES } from '../../account-detail.routes';

@Component({
  selector: 'app-categories-report-wp',
  templateUrl: './categories-report-wp.component.html',
  styleUrls: ['./categories-report-wp.component.scss'],
})
export class CategoriesReportWpComponent {
  constructor(private router: Router) {}

  options = {
    type: 'module' as 'module',
    remoteEntry: 'https://reports.smartsavings.dev/assets/remoteReportsMfe.js',
    exposedModule: './CategoriesReport',
    elementName: 'categories-report-mfe',
  };

  props = this.router.getCurrentNavigation()?.extras?.state?.['filter'] ?? {
    dateStart: undefined,
    dateEnd: undefined,
    format: undefined,
  };

  ngOnInit(): void {
    window.addEventListener(
      'reports:navigateToDetails',
      this.callback.bind(this)
    );

    window.addEventListener('reports:exit', this.onExit.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener(
      'reports:navigateToDetails',
      this.callback.bind(this)
    );

    window.removeEventListener('reports:exit', this.onExit.bind(this));
  }

  private onExit(): void {
    this.router.navigate([GLOBAL_APP_ROUTES.globalPosition]);
  }

  private callback = (event: any) => {
    const { filter } = event.detail;
    this.router.navigate([GLOBAL_ACCOUNT_DETAILS_ROUTES.detail], {
      state: {
        filter: {
          dateStart: filter.dateStart,
          dateEnd: filter.dateEnd,
          categoryType: filter.categoryType,
          format: filter.format,
        },
      },
    });
  };
}
