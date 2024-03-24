import { Injectable } from '@angular/core';
import { SessionInterfaceService } from '@app/repository/Session/session-interface.service';
import { UserInterfaceService } from '@app/repository/User/user-interface.service';
import { LoadingService } from '@app/services/Loading/loading.service';
import { CommonStoreService } from '@app/store/Common/common-store.service';
import { environment } from 'src/environments/environment';

const LOCAL_STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
};

@Injectable({
  providedIn: 'root',
})
export class SessionUseCaseService {
  constructor(
    private commonStore: CommonStoreService,
    private userInterfaceService: UserInterfaceService,
    private sessionService: SessionInterfaceService,
    private loadingService: LoadingService
  ) {}

  loginUser() {
    this.loadingService.show();

    this.userInterfaceService
      .info()
      .then((userInfo) => {
        this.commonStore.userInfo.set(userInfo);
      })
      .catch(() => {
        this.logout();
      })
      .finally(() => {
        this.loadingService.hide();
      });
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

  private getRefershToken() {
    return window.localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken) ?? '';
  }

  private getAccessToken() {
    return window.localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken) ?? '';
  }
}
