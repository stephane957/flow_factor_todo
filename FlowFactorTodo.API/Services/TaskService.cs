using System;
using FlowFactorTodo.API.Dtos;
using FlowFactorTodo.API.Entities;
namespace FlowFactorTodo.API.Services;

public interface ITaskService
{
    Task<TaskDetailsDTO> CreateTaskAsync(CreateTaskDTO createTaskDto);
    Task<IEnumerable<TaskSummaryDTO>> GetAllTasksAsync();
    Task<TaskDetailsDTO> UpdateTaskStatusAsync(int id, UpdateTaskDTO updateTaskDto);
}

public class TaskService : ITaskService
{
    public Task<TaskDetailsDTO> CreateTaskAsync(CreateTaskDTO createTaskDto)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<TaskSummaryDTO>> GetAllTasksAsync()
    {
        throw new NotImplementedException();
    }

    public Task<TaskDetailsDTO> UpdateTaskStatusAsync(int id, UpdateTaskDTO updateTaskDto)
    {
        throw new NotImplementedException();
    }
}
