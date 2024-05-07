using Microsoft.EntityFrameworkCore;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.Queries;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using TeamMembersHub.Domain.Enums;
using TeamMembersHub.Infrastructure.Contexts;

namespace TeamMembersHub.Application.Repositories;

public interface ITeamMembersRepository
{
    //TODO czy napewno w ten sposob wywolywac metody w repo??
    Task AddTeamMember(TeamMember teamMember);
    Task DeleteTeamMember(Guid id);
    Task UpdateTeamMember(TeamMember teamMember);
    Task<List<TeamMember>> GetTeamMembers();

    Task<TeamMember> GetTeamMemberById(Guid id);
}

public class TeamMembersRepository : ITeamMembersRepository
{
    private readonly TeamMembersDbContext _dbContext;

    public TeamMembersRepository(TeamMembersDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddTeamMember(TeamMember teamMember)
    {
        _dbContext.TeamMembers.Add(teamMember);
        await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteTeamMember(Guid id)
    {
        var removedMember = _dbContext.TeamMembers.Single(x => x.Id == id);
        _dbContext.TeamMembers.Remove(removedMember);
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpdateTeamMember(TeamMember teamMember)
    {
        _dbContext.TeamMembers.Update(teamMember);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<List<TeamMember>> GetTeamMembers()
    {
        return await _dbContext.TeamMembers.ToListAsync();
    }
    public async Task<TeamMember> GetTeamMemberById(Guid id)
    {
        return await _dbContext.TeamMembers.SingleAsync(x=>x.Id == id);
    }
}