import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageComponent } from './category-page.component';

import { CategoryPageRoutingModule } from './category-page-routing.module';

@NgModule({
  declarations: [CategoryPageComponent],
  imports: [CommonModule, CategoryPageRoutingModule],
})
export class CategoryPageModule {}
