using System;

namespace FlowFactorTodo.API.Entities;

public class TodoTask
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public string? Description { get; set; }
    public required string Status { get; set; } = "À faire";
    public int UserId { get; set; }
    public User? User { get; set; }
}
