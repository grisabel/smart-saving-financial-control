import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddConceptModalModule } from './pages/add-concept-modal/add-concept-modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AddConceptModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
