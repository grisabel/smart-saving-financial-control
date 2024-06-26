import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() src: string = '';
  @Input() userName: string = '';
  @Input() objective: string = '';
}
