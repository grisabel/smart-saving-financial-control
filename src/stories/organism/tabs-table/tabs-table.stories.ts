import type { Meta, StoryObj } from '@storybook/angular';

import { TabsTableComponent } from './tabs-table.component';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-table-story',
  standalone: true,
  imports: [CommonModule, TabsTableComponent],
  template: `
    <app-tabs-table [currentTab]="currentTab" [contentTabs]="[tab1, tab2]" />

    <ng-template #tab1>
      <div>Hola0</div>
    </ng-template>

    <ng-template #tab2>
      <div>Hola1</div>
    </ng-template>
  `,
  styleUrls: [],
})
export class TabsTableComponentStory {
  currentTab = signal(0);
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TabsTableComponentStory> = {
  title: 'Organism/Tabstable',
  component: TabsTableComponentStory,
  tags: ['autodocs'],
  render: (args: TabsTableComponentStory) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<TabsTableComponentStory>;

export const TabstableExample: Story = {
  args: {},
};
