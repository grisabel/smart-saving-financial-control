import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '@stories/atoms/icon/icon.component';

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
}
