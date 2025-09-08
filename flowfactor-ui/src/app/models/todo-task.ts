export interface TodoTask {  
  id?: number;  
  title: string;  
  description?: string;  
  status: string;  
  user: string;  
} 
export interface CreateTaskDto {
  title: string;
  description: string;
  status: 'À faire' | 'En cours' | 'Terminé';
  user: string;
}

export interface UpdateTaskDto {
  status: 'À faire' | 'En cours' | 'Terminé';
}