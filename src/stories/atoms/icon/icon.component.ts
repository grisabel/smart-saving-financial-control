import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name: string = '';
  @Input() color?: 'success' | 'error';
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  //todo classnamae

  @ViewChild('spanElRef') spanElRef!: ElementRef<HTMLSpanElement>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      this.loadIcon();
    }
  }

  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
  }

  private loadIcon(): void {
    if (!this.name) return;

    import(`./SmartSavingsIcon/build/smartsaving-${this.name}.icon`)
      .then((module) => {
        const { data } = Object.values(module)[0] as {
          name: string;
          data: string;
        };
        if (data) {
          this.renderSvg(data);
        }
      })
      .catch((error) => {
        console.log(
          `Could not find the Icon with the name ${this.name}, did you add it to assets folder?`
        );
      });
  }

  private renderSvg(svgContent: string): void {
    const svgElement = this.svgElementFromString(svgContent);
    this.clearSpanContent();
    this.spanElRef.nativeElement.appendChild(svgElement);
  }

  private clearSpanContent(): void {
    this.spanElRef.nativeElement.innerHTML = '';
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
