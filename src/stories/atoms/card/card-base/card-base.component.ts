import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-base.component.html',
  styleUrls: ['./card-base.component.scss'],
})
export class CardBaseComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
