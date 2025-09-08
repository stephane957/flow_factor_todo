import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItem } from './components/task-item/task-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskListComponent, TaskItem],
  template: `
    <main class="container">
      <h1>Flow Factor — To-Do list (prototype)</h1>
      <div class="grid">
        <app-task-form></app-task-form>
        <app-task-list></app-task-list>
      </div>
    </main>
  `,
  styles: [`
    .container { padding: 16px; max-width: 1100px; margin: 0 auto; }
    .grid { display: grid; grid-template-columns: 420px 1fr; gap: 16px; align-items: start; }
    @media (max-width: 800px) { .grid { grid-template-columns: 1fr; } }
  `]
})
export class App {
  protected readonly title = signal('flowfactor-ui');
}


