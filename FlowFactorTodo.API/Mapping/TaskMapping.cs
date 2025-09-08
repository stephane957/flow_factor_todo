using System;
using FlowFactorTodo.API.Entities;
using FlowFactorTodo.API.Dtos;
namespace FlowFactorTodo.API.Mapping;

public static class TaskMapping
{
    public static TodoTask ToEntity(this CreateTaskDTO createTaskDto, int userId)
    {
        return new TodoTask
        {
            Title = createTaskDto.Title,
            Description = createTaskDto.Description,
            Status = createTaskDto.Status,
            UserId = userId
        };
    }

    public static TaskSummaryDTO ToTaskSummaryDTO(this TodoTask task)
    {
        return new TaskSummaryDTO
        (
            Id: task.Id,
            Title: task.Title,
            Description: task.Description,
            Status: task.Status,
            User: task.User!.FirstName + " " + task.User!.LastName
        );
    }

    public static TaskDetailsDTO ToTaskDetailsDTO(this TodoTask task)
    {
        return new TaskDetailsDTO
        (
            Id: task.Id,
            Title: task.Title,
            Description: task.Description,
            Status: task.Status,
            UserId: task.UserId
        );
    }

}
