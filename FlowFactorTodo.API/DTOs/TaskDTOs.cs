namespace FlowFactorTodo.API.Dtos;

using System.ComponentModel.DataAnnotations;
using FlowFactorTodo.API.Entities;

public class CreateTaskDTO
{
    [Required]
    [MaxLength(50)]
    public required string Title { get; set; }

    [MaxLength(500)]
    public string Description { get; set; } = string.Empty;
    
    [Required]
    public required string Status { get; set; } = "À faire";

    [Required]
    public required User User { get; set; }
}

public record class TaskDetailsDTO
(
    int Id,
    string Title,
    string? Description,
    string Status,
    int UserId
);

public record class TaskSummaryDTO
(
    int Id,
    string Title,
    string? Description,
    string Status,
    string User
);

public record class UpdateTaskDTO
(
    [Required]
    string Status
);



