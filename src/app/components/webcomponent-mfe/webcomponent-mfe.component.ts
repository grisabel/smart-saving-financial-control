import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LoadRemoteModuleOptions,
  loadRemoteModule,
} from '@angular-architects/module-federation';

export type WebcomponentMfeOptions = LoadRemoteModuleOptions & {
  elementName: string;
};

@Component({
  selector: 'webcomponent-mfe',
  standalone: true,
  imports: [CommonModule],
  template: '<div #vc></div>',
})
export class WebcomponentMfeComponent {
  @ViewChild('vc', { read: ElementRef, static: true }) vc!: ElementRef;

  @Input() options!: WebcomponentMfeOptions;

  element!: HTMLElement;

  async ngAfterContentInit() {
    try {
      await loadRemoteModule(this.options);

      this.element = document.createElement(this.options.elementName);

      this.vc.nativeElement.appendChild(this.element);
    } catch (error) {
      console.error(error);
    }
  }
}
