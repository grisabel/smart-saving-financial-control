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
    const r = Math.floor(Math.random() * 156);
    const g = Math.floor(Math.random() * 156);
    const b = Math.floor(Math.random() * 156);

    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    };

    this.backgroundColor = '#' + toHex(r) + toHex(g) + toHex(b);
  }
}
