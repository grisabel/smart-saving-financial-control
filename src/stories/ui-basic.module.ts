import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './atoms/buttons/button/button.component';
import { IconComponent } from './atoms/icon/icon.component';

@NgModule({
  declarations: [],
  imports: [ButtonComponent, IconComponent],
  exports: [ButtonComponent, IconComponent],
})
export class UiBasicModule {}
