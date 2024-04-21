import { Component } from '@angular/core';
import { GLOBAL_ACCOUNT_DETAILS_ROUTES } from '../../account-detail.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-details-report-wp',
  templateUrl: './categories-details-report-wp.component.html',
  styleUrls: ['./categories-details-report-wp.component.scss'],
})
export class CategoriesDetailsReportWpComponent {
  constructor(private router: Router) {}

  options = {
    type: 'module' as 'module',
    remoteEntry: 'https://reports-mfe.smartsavings.dev/assets/remoteReportsMfe.js',
    exposedModule: './CategoriesDetailsReport',
    elementName: 'categories-details-report-mfe',
  };

  props = this.router.getCurrentNavigation()?.extras?.state?.['filter'] ?? {
    dateStart: undefined,
    dateEnd: undefined,
    format: undefined,
  };

  ngOnInit(): void {
    window.addEventListener(
      'reports:navigateToSummary',
      this.callback.bind(this)
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener(
      'reports:navigateToSummary',
      this.callback.bind(this)
    );
  }

  private callback = (event: any) => {
    const { filter } = event.detail;
    this.router.navigate([GLOBAL_ACCOUNT_DETAILS_ROUTES.summary], {
      state: {
        filter: {
          dateStart: filter.dateStart,
          dateEnd: filter.dateEnd,
          format: filter.format,
        },
      },
    });
  };
}
