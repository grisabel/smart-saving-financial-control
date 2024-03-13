import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryBtnComponent } from '@stories/atoms/buttons/category-btn/category-btn.component';

@Component({
  selector: 'app-selector-category-btn',
  standalone: true,
  imports: [CommonModule, CategoryBtnComponent],
  templateUrl: './selector-category-btn.component.html',
  styleUrls: ['./selector-category-btn.component.scss'],
})
export class SelectorCategoryBtnComponent {
  @Input() icons: Array<String> = [];
}
