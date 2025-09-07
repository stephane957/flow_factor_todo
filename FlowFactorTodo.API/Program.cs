var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var connString = builder.Configuration.GetConnectionString("FlowFactorTodo");
//builder.Services.AddDbContext<FlowFactorTodoDbContext>(connString);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}


app.UseHttpsRedirection();
app.UseAuthorization();

app.Run();


