import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTaskDto, TodoTask, UpdateTaskDto } from '../models/todo-task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5209/api/tasks';
  private readonly http = inject(HttpClient);

  constructor() { }

  // HTTP methods for CRUD operations
  getTasks(): Observable<TodoTask[]> {
    return this.http.get<TodoTask[]>(`${this.apiUrl}`);
  }

  createTask(task: CreateTaskDto) {
    return this.http.post<TodoTask>(`${this.apiUrl}`, task);
  }

  updateStatus(id: number, task: UpdateTaskDto) {
    return this.http.patch(`${this.apiUrl}/${id}`, task);
  }

}
