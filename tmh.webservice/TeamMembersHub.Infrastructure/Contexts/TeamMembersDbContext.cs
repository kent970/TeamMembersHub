using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TeamMembersHub.Domain.Aggregates.TeamMember;

namespace TeamMembersHub.Infrastructure.Contexts;

public class TeamMembersDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public DbSet<TeamMember> TeamMembers { get; set; }

    public TeamMembersDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("TeamMembers"));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TeamMember>()
            .Property(e => e.CreatedAt)
            .HasColumnType("timestamp(0) without time zone"); 
    }
}