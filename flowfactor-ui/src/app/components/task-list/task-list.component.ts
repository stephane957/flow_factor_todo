import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TodoTask, CreateTaskDto, UpdateTaskDto } from '../../interfaces/todo-task';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: TodoTask[] = [];
  loading = true;
  error: string | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.error = null;
    
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des tâches';
        this.loading = false;
        console.error('Error loading tasks:', err);
      }
    });
  }

  onTaskCreated(taskData: CreateTaskDto): void {
    this.taskService.createTask(taskData).subscribe({
      next: (newTask) => {
        this.tasks.push(newTask);
      },
      error: (err) => {
        this.error = 'Erreur lors de la création de la tâche';
        console.error('Error creating task:', err);
      }
    });
  }

  onStatusChanged(event: {id?: number, status: UpdateTaskDto}): void {
    this.taskService.updateStatus(event.id!, event.status).subscribe({
      error: (err) => {
        this.error = 'Erreur lors de la mise à jour de la tâche';
        console.error('Error updating task:', err);
        // Recharger les tâches pour récupérer l'état correct
        this.loadTasks();
      }
    });
  }

  trackByTaskId(index: number, task: TodoTask): number {
    return task.id!;
  }
}