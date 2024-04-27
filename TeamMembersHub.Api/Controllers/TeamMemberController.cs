using MediatR;
using Microsoft.AspNetCore.Mvc;
using TeamMembersHub.Application.Commands;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.Queries;

namespace TeammembersHub.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class TeamMemberController : ControllerBase
{
    private readonly IMediator _mediator;

    public TeamMemberController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task AddTeamMember(string name, string email, string phone)
    {
        await _mediator.Send(new AddTeamMemberCommand(name,email,phone));
    }
    
    [HttpPost]
    public async Task UpdateTeamMember(Guid id,string name, string email, string phone )
    {
        await _mediator.Send(new UpdateTeamMemberCommand(id,name,email,phone));
    }
    
    [HttpPost]
    public async Task DeleteTeamMember(Guid id)
    {
        await _mediator.Send(new DeleteTeamMemberCommand(id));
    }
    
    [HttpPost]
    public async Task ChangeTeamMemberStatus(Guid id,int status)
    {
        await _mediator.Send(new ChangeTeamMemberStatusCommand(id, status));
    }
    
    [HttpPost]
    public async Task<List<TeamMemberDataModel>> GetTeamMembers()
    {
        var result = await _mediator.Send(new GetTeamMembersQuery());
        return result;
    }
    
}