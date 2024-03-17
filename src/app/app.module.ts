import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app-layout/app-layout.module';
import { SpinnerComponent } from '@stories/atoms/spinner/spinner.component';
import { UserInterfaceService } from './repository/User/user-interface.service';
import { environment } from 'src/environments/environment';
import { UserHttpService } from './repository/User/user-http.service';
import { UserMockService } from './repository/User/user-mock.service';
import { HttpModule } from './services/Http/http.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    SpinnerComponent,
    HttpModule,
  ],
  providers: [
    {
      provide: UserInterfaceService,
      useClass: !environment.mock ? UserHttpService : UserMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
