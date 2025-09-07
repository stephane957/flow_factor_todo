namespace FlowFactorTodo.API.Dtos;

using System.ComponentModel.DataAnnotations;

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
    public int UserId { get; set; }
}

public record class TaskDetailsDTO
(
    int Id,
    string Title,
    string? Description,
    string Status
);

public record class TaskSummaryDTO
(
    int Id,
    string Title,
    string Status,
    string User
);

public record class UpdateTaskDTO
(
    [Required]
    string Status
);



