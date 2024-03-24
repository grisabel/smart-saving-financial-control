import { Component, OnInit } from '@angular/core';
import { SessionUseCaseService } from './domain/Session/session-use-case.service';
import { LoadingService } from './services/Loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private sessionUseCase: SessionUseCaseService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.sessionUseCase.loginUser();
  }
}
