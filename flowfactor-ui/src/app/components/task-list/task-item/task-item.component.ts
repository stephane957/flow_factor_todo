import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoTask, UpdateTaskDto } from '../../../interfaces/todo-task';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: TodoTask;
  @Output() statusChanged = new EventEmitter<{ id?: number; status: UpdateTaskDto }>();

  onStatusChange(newStatus: 'À faire' | 'En cours' | 'Complété'): void {
    this.statusChanged.emit({
      id: this.task.id!,
      status: { status: newStatus },
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'À faire':
        return 'status-todo';
      case 'En cours':
        return 'status-progress';
      case 'Complété':
        return 'status-done';
      default:
        return '';
    }
  }
}
