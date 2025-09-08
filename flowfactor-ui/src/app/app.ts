import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  template: `
    <div class="app-container">
      <app-task-list></app-task-list>
      <p> Hello World!</p>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #ecf0f1;
      padding: 20px 0;
    }
  `]
})
export class App {}


