import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryBtnComponent } from '@stories/atoms/buttons/category-btn/category-btn.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-item-category',
  standalone: true,
  imports: [CommonModule, CategoryBtnComponent, TranslocoModule],
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss'],
})
export class ItemCategoryComponent {
  @Input() iconName!: string;
}
