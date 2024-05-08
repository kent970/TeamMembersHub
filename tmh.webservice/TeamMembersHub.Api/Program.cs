using System.Reflection;
using TeamMembersHub.Application.CommandHandlers;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.QueryHandlers;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using TeamMembersHub.Infrastructure;
using TeamMembersHub.Infrastructure.Contexts;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddAutoMapper(typeof(TeamMemberQueryHandlers));
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(TeamMemberCommandHandlers).Assembly));

builder.Services.AddDbContext<TeamMembersDbContext>();
builder.Services.AddScoped<ITeamMembersRepository, TeamMembersRepository>();
builder.Services.AddScoped<IRandomUserApiService, RandomUserApiService>();
builder.Services.AddHttpClient<IRandomUserApiService, RandomUserApiService>(client =>
{
    client.BaseAddress = new Uri(builder.Configuration["BaseUrl"]);
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhostPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();
app.UseCors("AllowLocalhostPolicy");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();