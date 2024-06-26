import { Component, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStepsInputs } from '@stories/atoms/modals/modal-steps/modal-base.component.types';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-tabs-table',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './tabs-table.component.html',
  styleUrls: ['./tabs-table.component.scss'],
})
export class TabsTableComponent {
  @Input() titleTabs!: string[];
  @Input() currentTab!: WritableSignal<number>;
  @Input() contentTabs!: ModalStepsInputs['steps'];

  handleActiveTab(tabId: number) {
    this.currentTab.set(tabId);
  }
}
