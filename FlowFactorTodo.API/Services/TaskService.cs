using System;
using FlowFactorTodo.API.Data;
using FlowFactorTodo.API.Dtos;
using FlowFactorTodo.API.Entities;
using FlowFactorTodo.API.Mapping;
using Microsoft.EntityFrameworkCore;

namespace FlowFactorTodo.API.Services;

public interface ITaskService
{
    Task<TaskDetailsDTO> CreateTaskAsync(CreateTaskDTO createTaskDto);
    Task<IEnumerable<TaskSummaryDTO>> GetAllTasksAsync();
    Task<TaskDetailsDTO> UpdateTaskStatusAsync(int id, UpdateTaskDTO updateTaskDto);
}

public class TaskService(AppDbContext context) : ITaskService
{
    private readonly AppDbContext _dbContext = context;

    public async Task<IEnumerable<TaskSummaryDTO>> GetAllTasksAsync()
    {
        return await _dbContext.Tasks
                        .Include(t => t.User)
                        .AsNoTracking()
                        .Select(task => task.ToTaskSummaryDTO())
                        .ToListAsync();                    
    }

    public async Task<TaskDetailsDTO> CreateTaskAsync(CreateTaskDTO createTaskDto)
    {
        // Ensure the user exists or create a new one
        var user = await _dbContext.Users
                        .FirstOrDefaultAsync(u => u.FirstName == createTaskDto.User.FirstName && u.LastName == createTaskDto.User.LastName);
        if (user == null)
        {
            user = new User
            {
                FirstName = createTaskDto.User.FirstName,
                LastName = createTaskDto.User.LastName
            };
            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync();
        }

        // Adds the new task
        TodoTask createdTask = createTaskDto.ToEntity(user.Id);

        _dbContext.Tasks.Add(createdTask);
        await _dbContext.SaveChangesAsync();

        return createdTask.ToTaskDetailsDTO();
    }

    public async Task<TaskDetailsDTO> UpdateTaskStatusAsync(int id, UpdateTaskDTO updateTaskDto)
    {
        var existingTask = await _dbContext.Tasks.FindAsync(id) ?? throw new KeyNotFoundException($"Task with id {id} not found.");
        if (updateTaskDto.Status is not null)
        {
            existingTask.Status = updateTaskDto.Status;
        }

        await _dbContext.SaveChangesAsync();

        return existingTask.ToTaskDetailsDTO();
    }
}
