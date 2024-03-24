import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SessionUseCaseService } from './domain/Session/session-use-case.service';
import { LoadingService } from './services/Loading/loading.service';
import { Subscription } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  subscription: Subscription = new Subscription();

  constructor(
    private sessionUseCase: SessionUseCaseService,
    public loadingService: LoadingService,
    private translocoService: TranslocoService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sessionUseCase.loginUser();

    let language = window.localStorage.getItem('language');
    if (language) {
      this.translocoService.setActiveLang(language);
    }

    this.subscription = this.translocoService.langChanges$.subscribe((lang) => {
      console.log('hola');

      this.changeDetectorRef.detectChanges();
    });

    setTimeout(() => {
      this.translocoService.setActiveLang('en');
    }, 1000);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
