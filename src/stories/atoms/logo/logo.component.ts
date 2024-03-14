import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {}
