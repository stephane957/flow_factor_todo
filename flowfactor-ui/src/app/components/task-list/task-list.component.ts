import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TodoTask, CreateTaskDto, UpdateTaskDto } from '../../interfaces/todo-task';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<TodoTask[]>;
  loading$: Observable<boolean>;
  error: string | null = null;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
    this.loading$ = this.taskService.loading$;
  }
  ngOnInit(): void {
    // Initial load is handled by the service constructor
  }

  onTaskCreated(taskData: CreateTaskDto): void {
    this.error = null;
    this.taskService.createTask(taskData).pipe(
      catchError((err) => {
        this.error = err.message;
        return of(null);
      })
    ).subscribe();
  }

  onStatusChanged(event: {id?: number, status: UpdateTaskDto}): void {
    this.taskService.updateStatus(event.id!, event.status).pipe(
      catchError((err) => {
        this.error = err.message;
        return of(null);
      })
    ).subscribe();
  }

  trackByTaskId(index: number, task: TodoTask): number {
    return task.id!;
  }

  refreshTasks(): void {
    this.error = null;
    this.taskService.loadTasks();
  }
}