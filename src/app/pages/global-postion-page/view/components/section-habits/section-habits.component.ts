import { Component } from '@angular/core';

@Component({
  selector: 'app-section-habits',
  templateUrl: './section-habits.component.html',
  styleUrls: ['./section-habits.component.scss'],
})
export class SectionHabitsComponent {
  options = {
    type: 'module' as 'module',
    remoteEntry: 'https://habits-mfe.smartsavings.dev/assets/remoteHabitsMfe.js',
    exposedModule: './HabitsMfe',
    elementName: 'habits-mfe',
  };
}
