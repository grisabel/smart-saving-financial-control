import { Injectable } from '@angular/core';
import { SessionInterfaceService } from '@app/repository/Session/session-interface.service';
import { UserInterfaceService } from '@app/repository/User/user-interface.service';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';
import { LoadingService } from '@app/services/Loading/loading.service';
import { CommonStoreService } from '@app/store/Common/common-store.service';
import { environment } from 'src/environments/environment';

export const LOCAL_STORAGE_KEYS = {
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
    private loadingService: LoadingService,
    private httpService: HttpInterfaceService
  ) {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('accessToken');
    const refreshToken = queryParams.get('refreshToken');

    if (accessToken && refreshToken) {
      window.localStorage.setItem(
        LOCAL_STORAGE_KEYS.refreshToken,
        refreshToken
      );
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, accessToken);
    }
  }

  loginUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      const access_token = this.getAccessToken();

      if(!access_token){
        document.location.href = environment.data.logoutUrl;
        return;
      }

      this.httpService.setAccessToken(access_token);

      this.loadingService.show();

      this.userInterfaceService
        .info()
        .then((userInfo) => {
          this.commonStore.userInfo.set(userInfo);
          resolve();
        })
        .catch((error) => {
          this.logout();
          reject(error);
        })
        .finally(() => {
          this.loadingService.hide();
        });
    });
  }

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.loadingService.show();
      this.sessionService
        .logout({ refreshToken: this.getRefershToken() })
        .finally(() => {
          window.localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
          window.localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken);
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
