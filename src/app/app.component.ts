import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/Loading/loading.service';
import { CommonStoreService } from './store/Common/common-store.service';
import { UserInterfaceService } from './repository/User/user-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public loadingService: LoadingService,
    private commonStore: CommonStoreService,
    private userInterfaceService: UserInterfaceService
  ) {}

  ngOnInit(): void {
    this.loadingService.show();

    this.userInterfaceService
      .info()
      .then((userInfo) => {
        this.commonStore.userInfo.set(userInfo);
      })
      .finally(() => {
        this.loadingService.hide();
      });
  }
}
