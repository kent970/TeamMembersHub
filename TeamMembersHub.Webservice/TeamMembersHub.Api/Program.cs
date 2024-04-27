using System.Reflection;
using TeamMembersHub.Application.CommandHandlers;
using TeamMembersHub.Application.QueryHandlers;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using TeamMembersHub.Infrastructure;
using TeamMembersHub.Infrastructure.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddAutoMapper(typeof(TeamMemberQueryHandlers));
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(TeamMemberCommandHandlers).Assembly));

builder.Services.AddDbContext<TeamMembersDbContext>();
builder.Services.AddScoped<ITeamMembersRepository, TeamMembersRepository>();

var app = builder.Build();

//TODO
//DatabaseInitializer.Seed(app);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();