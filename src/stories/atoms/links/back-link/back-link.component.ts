import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '@stories/atoms/icon/icon.component';
import { Router } from '@angular/router';
import { GLOBAL_APP_ROUTES } from '@app/app-routes';

@Component({
  selector: 'app-back-link',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './back-link.component.html',
  styleUrls: ['./back-link.component.scss'],
})
export class BackLinkComponent {
  @Input() labelLink: string = '';
  @Input() href: string = '';

  constructor(private router: Router) {}

  handleClick(event: Event) {
    event.preventDefault();
    this.router.navigate([this.href]);
  }
}
