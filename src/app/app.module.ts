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
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { SessionInterfaceService } from './repository/Session/session-interface.service';
import { SessionHttpService } from './repository/Session/session-http.service';
import { SessionMockService } from './repository/Session/session-mock.service';
import { SessionUseCaseService } from './domain/Session/session-use-case.service';
import { TranslocoModule } from '@ngneat/transloco';
import { HttpInterfaceService } from './services/Http/http-interface.service';
import { HttpService } from './services/Http/http.service';
import { HttpMockAdapterService } from './services/Http/http-mock-adapter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    SpinnerComponent,
    HttpClientModule,
    TranslocoRootModule,
    TranslocoModule,
  ],
  providers: [
    {
      provide: HttpInterfaceService,
      useClass: !environment.mock ? HttpService : HttpMockAdapterService,
    },
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
