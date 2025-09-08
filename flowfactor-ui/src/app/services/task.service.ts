import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CreateTaskDto, TodoTask, UpdateTaskDto } from '../interfaces/todo-task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5209/api/tasks';
  private tasksSubject = new BehaviorSubject<TodoTask[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  private readonly http = inject(HttpClient);

  constructor() { this.loadTasks(); }

  // HTTP methods for CRUD operations with Async Pipe
  loadTasks(){
    this.loadingSubject.next(true);
    this.http.get<TodoTask[]>(this.apiUrl).pipe(
      tap((tasks) => {
        this.tasksSubject.next(tasks);
        this.loadingSubject.next(false);
      }),
      catchError((error) => {
        this.loadingSubject.next(false);
        return throwError(() => new Error('Erreur lors du chargement des tâches'));
      })
    ).subscribe();
    
  }

  createTask(task: CreateTaskDto): Observable<TodoTask> {
    this.loadingSubject.next(true);
    return this.http.post<TodoTask>(this.apiUrl, task).pipe(
      tap((newTask) => {
        const currentTasks = this.tasksSubject.value;
        this.tasksSubject.next([...currentTasks, newTask]);
        this.loadingSubject.next(false);
      }),
      catchError((error) => {
        this.loadingSubject.next(false);
        return throwError(() => new Error('Erreur lors de la création de la tâche'));
      })
    );
  }

  updateStatus(id: number, task: UpdateTaskDto): Observable<TodoTask> {
    this.loadingSubject.next(true);
    return this.http.patch<TodoTask>(`${this.apiUrl}/${id}`, task).pipe(
      tap(updatedTask => {
        const currentTasks = this.tasksSubject.value;
        const updatedTasks = currentTasks.map(t => 
          t.id === id ? {...t, ...updatedTask} : t
        );
        this.tasksSubject.next(updatedTasks);
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error('Erreur lors de la mise à jour du statut de la tâche'));
      })
    );
  }

}
