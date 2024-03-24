import { Injectable } from '@angular/core';
import { SessionInterfaceService } from '@app/repository/Session/session-interface.service';
import { LoadingService } from '@app/services/Loading/loading.service';
import { environment } from 'src/environments/environment';

interface SummaryParams {
  requestModel: null;
  view: {
    setLoading: (value: boolean) => void;
  };
}

const LOCAL_STORAGE_KEYS = {
  refreshToken: 'refreshToken',
};

@Injectable({
  providedIn: 'root',
})
export class SessionUseCaseService {
  constructor(
    private sessionService: SessionInterfaceService,
    private loadingService: LoadingService
  ) {}

  private getRefershToken() {
    return window.localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken) ?? '';
  }

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.loadingService.show();
      this.sessionService
        .logout({ refreshToken: this.getRefershToken() })
        .finally(() => {
          resolve();
          document.location.href = environment.data.logoutUrl;
        });
    });
  }
}
