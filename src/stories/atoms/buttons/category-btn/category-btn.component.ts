import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@stories/atoms/icon/icon.component';

@Component({
  selector: 'app-category-btn',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './category-btn.component.html',
  styleUrls: ['./category-btn.component.scss'],
})
export class CategoryBtnComponent {
  backgroundColor = '#ffffff';

  @Input()
  set iconName(value: string) {
    if (!value) return;
    this.#iconName = value;
    this.backgroundColor = this.generateContrastingColor();
  }

  get iconName() {
    return this.#iconName;
  }
  #iconName: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() readOnly?: boolean;

  handleClick(): void {
    this.onClick.emit({
      icon: this.iconName,
      background: this.backgroundColor,
    });
  }

  generateContrastingColor() {
    const iconHash = Array.from(this.iconName).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    const highValue = Math.floor(iconHash % (256 - 129)) + 129;

    const midValueBase = Math.floor(iconHash % 256);
    const lowValueBase = Math.floor(iconHash % 128);

    const midValue = midValueBase;
    const lowValue = lowValueBase;

    let [r, g, b] = [midValue, midValue, midValue];
    const highComponent = Math.floor(Math.random() * 3);
    switch (highComponent) {
      case 0:
        r = highValue;
        g = this.iconName.length % 2 === 0 ? midValue : lowValue;
        b = g === midValue ? lowValue : midValue;
        break;
      case 1:
        g = highValue;
        r = this.iconName.length % 2 === 0 ? midValue : lowValue;
        b = r === midValue ? lowValue : midValue;
        break;
      case 2:
        b = highValue;
        r = this.iconName.length % 2 === 0 ? midValue : lowValue;
        g = r === midValue ? lowValue : midValue;
        break;
    }

    const toHex = (c: number) => c.toString(16).padStart(2, '0');
    return '#' + toHex(r) + toHex(g) + toHex(b);
  }
}
