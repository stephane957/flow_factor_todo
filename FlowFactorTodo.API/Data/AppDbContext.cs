using System;
using FlowFactorTodo.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace FlowFactorTodo.API.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options)
                : DbContext(options)
{
    public DbSet<TodoTask> Tasks => Set<TodoTask>();

    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, FirstName = "John", LastName = "Smith" },
            new User { Id = 2, FirstName = "Jane", LastName = "Smith" },
            new User { Id = 3, FirstName = "Sigmund", LastName = "Freud" },
            new User { Id = 4, FirstName = "Emmanuel", LastName = "Kant" },
            new User { Id = 5, FirstName = "Friedrich", LastName = "Nietzsche" }
        );
    }
}
