import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app-layout/app-layout.module';
import { SpinnerComponent } from '@stories/atoms/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppLayoutModule, SpinnerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
