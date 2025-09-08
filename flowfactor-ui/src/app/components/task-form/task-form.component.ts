import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTaskDto } from '../../interfaces/todo-task';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<CreateTaskDto>();

  newTask: CreateTaskDto = 
  { title: "", 
    description: "", 
    status: "À faire", 
    user: { firstName: "", lastName: "" } 
  };

  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
    if (this.isFormValid()) {
      this.taskCreated.emit({ ...this.newTask });
      this.resetForm();
      this.submitted.set(false);
    }
  }

  isFormValid(): boolean {
    return this.newTask.title.trim() !== "" &&
           this.newTask.user.firstName.trim() !== "" &&
           this.newTask.user.lastName.trim() !== "";
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.newTask[fieldName as keyof CreateTaskDto];
    return this.submitted() && (field === "" || field === null || field === undefined);
  }

  private resetForm(): void {
    this.newTask = { title: "", description: "", status: "À faire", user: { firstName: "", lastName: "" } };
  }

}
