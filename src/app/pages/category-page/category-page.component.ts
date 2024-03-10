import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent {
  openAddCategory: WritableSignal<boolean> = signal(false);
}
