import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DotProps {
  isTransited?: boolean;
  hasError?: boolean;
}

@Component({
  selector: 'app-dot-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dot-step.component.html',
  styleUrls: ['./dot-step.component.scss'],
})
export class DotStepComponent {
  @Input() steps!: DotProps[];

  constructor() {}

  ngOnInit(): void {}
}
