import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  open = signal<boolean>(false);
  number: number = 0;

  async show() {
    this.number++;

    if (this.open()) {
      return;
    }

    this.open.set(true);
  }

  async hide() {
    if (this.number == 0) {
      return;
    }

    this.number--;

    if (this.open() && this.number == 0) {
      this.open.set(false);
      return;
    }

    setTimeout(() => {
      this.hide();
    }, 500);
  }
}
