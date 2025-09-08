using FlowFactorTodo.API.Data;
using FlowFactorTodo.API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connString = builder.Configuration.GetConnectionString("FlowFactorTodo");

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddScoped<ITaskService, TaskService>();
// Register the database context
builder.Services.AddSqlite<AppDbContext>(connString);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseAuthorization();
app.MapControllers();
await app.MigrateDbAsync();

app.Run();


