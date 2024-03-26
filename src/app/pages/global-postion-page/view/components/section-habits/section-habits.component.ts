import { Component } from '@angular/core';

@Component({
  selector: 'app-section-habits',
  templateUrl: './section-habits.component.html',
  styleUrls: ['./section-habits.component.scss'],
})
export class SectionHabitsComponent {
  options = {
    type: 'module' as 'module',
    remoteEntry: 'http://localhost:5173/assets/remoteHabitsMfe.js',
    exposedModule: './HabitsMfe',
    elementName: 'habits-mfe',
  };
}
