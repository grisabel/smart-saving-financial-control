import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { AppDesktopLayoutComponent } from '@stories/templates/app-desktop-layout/app-desktop-layout.component';
import { AppMobileLayoutComponent } from '@stories/templates/app-mobile-layout/app-mobile-layout.component';
import { MenuMobileComponent } from '@stories/molecules/menu/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    AppDesktopLayoutComponent,
    AppMobileLayoutComponent,
    MenuMobileComponent,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
