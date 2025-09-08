using System;
using FlowFactorTodo.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace FlowFactorTodo.API.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options)
                : DbContext(options)
{
    public DbSet<TodoTask> Tasks => Set<TodoTask>();

    public DbSet<User> Users => Set<User>();

}
