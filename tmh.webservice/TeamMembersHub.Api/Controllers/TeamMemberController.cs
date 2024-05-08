using MediatR;
using Microsoft.AspNetCore.Mvc;
using TeamMembersHub.Application.Commands;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.Queries;

namespace TeamMembersHub.Api.Controllers;

[ApiController]
[Route("api/members")]
public class TeamMemberController : ControllerBase
{
    private readonly IMediator _mediator;

    public TeamMemberController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddTeamMember(string name, string email, string phone, string imageUrl)
    {
        await _mediator.Send(new AddTeamMemberCommand(name, email, phone, imageUrl));
        return Ok();
    }

    [HttpPost("addRandom")]
    public async Task<IActionResult> AddRandomTeamMember()
    {
        await _mediator.Send(new AddRandomTeamMemberCommand());
        return Ok();
    }

    [HttpPost("getRandom")]
    public async Task<RandomTeamMemberDataModel> GetRandomTeamMember()
    {
        var result = await _mediator.Send(new GetRandomTeamMemberQuery());
        return result;
    }

    [HttpPut("update/{id}")]
    public async Task<IActionResult> UpdateTeamMember(Guid id, string name, string email, string phone)
    {
        await _mediator.Send(new UpdateTeamMemberCommand(id, name, email, phone));

        return Ok();
    }

    [HttpDelete]
    public async Task DeleteTeamMember(Guid id)
    {
        await _mediator.Send(new DeleteTeamMemberCommand(id));
    }

    [HttpPut("status/{id}")]
    public async Task<IActionResult> ChangeTeamMemberStatus(Guid id, int status)
    {
        await _mediator.Send(new ChangeTeamMemberStatusCommand(id, status));

        return Ok();
    }

    [HttpGet("getAll")]
    public async Task<List<TeamMemberDataModel>> GetTeamMembers()
    {
        var result = await _mediator.Send(new GetTeamMembersQuery());
        return result;
    }
}