import { inject, Injectable, Inject  } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { APP_BASE_HREF } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    constructor(@Inject(APP_BASE_HREF) public baseHref:string) {}

    getTranslation(lang: string) {
        return this.http.get<Translation>(`${this.baseHref}/assets/i18n/${lang}.json`);
    }
}
