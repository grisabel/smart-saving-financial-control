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
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { SessionInterfaceService } from './repository/Session/session-interface.service';
import { SessionHttpService } from './repository/Session/session-http.service';
import { SessionMockService } from './repository/Session/session-mock.service';
import { SessionUseCaseService } from './domain/Session/session-use-case.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    SpinnerComponent,
    HttpModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [
    {
      provide: UserInterfaceService,
      useClass: !environment.mock ? UserHttpService : UserMockService,
    },
    {
      provide: SessionInterfaceService,
      useClass: !environment.mock ? SessionHttpService : SessionMockService,
    },
    SessionUseCaseService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
