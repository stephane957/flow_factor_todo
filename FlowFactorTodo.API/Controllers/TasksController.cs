using FlowFactorTodo.API.Dtos;
using FlowFactorTodo.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace FlowFactorTodo.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class TasksController(ITaskService taskService) : ControllerBase
    {
        private readonly ITaskService _taskService = taskService;

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _taskService.GetAllTasksAsync();
            return Ok(tasks);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] CreateTaskDTO createTaskDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var createdTask = await _taskService.CreateTaskAsync(createTaskDto);
            return CreatedAtAction(nameof(GetAllTasks), new { id = createdTask.Id }, createdTask);
        }

        [HttpPatch("{id:int}")]
        public async Task<IActionResult> UpdateTaskStatus(int id, [FromBody] UpdateTaskDTO updateTaskDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var updatedTask = await _taskService.UpdateTaskStatusAsync(id, updateTaskDto);
                return Ok(updatedTask);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }
    }
}
