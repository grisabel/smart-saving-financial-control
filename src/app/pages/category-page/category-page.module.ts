import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageComponent } from './category-page.component';

import { CategoryPageRoutingModule } from './category-page-routing.module';
import { AddCategoryModalComponent } from './modal/add-category-modal/add-category-modal.component';
import { ModalComponent } from '@stories/atoms/modals/modal/modal.component';
import { UiBasicModule } from '@stories/ui-basic.module';

@NgModule({
  declarations: [CategoryPageComponent, AddCategoryModalComponent],
  imports: [
    CommonModule,
    CategoryPageRoutingModule,
    //UI MODULES
    ModalComponent,
    UiBasicModule,
  ],
})
export class CategoryPageModule {}
