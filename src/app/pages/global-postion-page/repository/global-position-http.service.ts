import { Injectable, inject } from '@angular/core';
import { HttpInterfaceService } from '@app/services/Http/http-interface.service';

@Injectable()
export class GlobalPositionHttpService {
  http = inject(HttpInterfaceService);
}
