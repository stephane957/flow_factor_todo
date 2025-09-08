import { User } from './user';

export interface TodoTask {
  id?: number;
  title: string;
  description?: string;
  status: string;
  user: User;
}
export interface CreateTaskDto {
  title: string;
  description: string;
  status: 'À faire' | 'En cours' | 'Complété';
  user: User;
}

export interface UpdateTaskDto {
  status: 'À faire' | 'En cours' | 'Complété';
}
