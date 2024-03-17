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
  backgroundColor = '';

  @Input() iconName: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.generateContrastingColor();
  }

  handleClick(): void {
    this.onClick.emit({
      icon: this.iconName,
      background: this.backgroundColor,
    });
  }

  generateContrastingColor() {
    const highValue = Math.floor(Math.random() * (256 - 129)) + 129;

    const midValue = Math.floor(Math.random() * 256);
    const lowValue = Math.floor(Math.random() * 128);

    let [r, g, b] = [midValue, midValue, midValue];
    const highComponent = Math.floor(Math.random() * 3);
    switch (highComponent) {
      case 0:
        r = highValue;
        g = Math.random() > 0.5 ? midValue : lowValue;
        b = g === midValue ? lowValue : midValue;
        break;
      case 1:
        g = highValue;
        r = Math.random() > 0.5 ? midValue : lowValue;
        b = r === midValue ? lowValue : midValue;
        break;
      case 2:
        b = highValue;
        r = Math.random() > 0.5 ? midValue : lowValue;
        g = r === midValue ? lowValue : midValue;
        break;
    }

    const toHex = (c: number) => c.toString(16).padStart(2, '0');
    this.backgroundColor = '#' + toHex(r) + toHex(g) + toHex(b);
  }
}
