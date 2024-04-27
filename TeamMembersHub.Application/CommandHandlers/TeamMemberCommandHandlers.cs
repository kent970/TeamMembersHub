using MediatR;
using TeamMembersHub.Application.Commands;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;

namespace TeamMembersHub.Application.CommandHandlers;

public class TeamMemberCommandHandlers :
    IRequestHandler<AddTeamMemberCommand>,
    IRequestHandler<ChangeTeamMemberStatusCommand>,
    IRequestHandler<DeleteTeamMemberCommand>,
    IRequestHandler<UpdateTeamMemberCommand>
{
    private readonly ITeamMembersRepository _repository;

    public TeamMemberCommandHandlers(ITeamMembersRepository repository)
    {
        _repository = repository;
    }

    public  async Task Handle(AddTeamMemberCommand request, CancellationToken cancellationToken)
    {
        var teamMember = TeamMember.Create(request.Name, request.Email, request.Phone);
        await _repository.AddTeamMember(teamMember);
    }

    public async Task Handle(ChangeTeamMemberStatusCommand request, CancellationToken cancellationToken)
    {
        var teamMember = await _repository.GetTeamMemberById(request.MemberId);
        teamMember.ChangeStatus(request.NewStatus);
        await _repository.UpdateTeamMember(teamMember);
    }

    public  async Task Handle(DeleteTeamMemberCommand request, CancellationToken cancellationToken)
    {
        await _repository.DeleteTeamMember(request.MemberId);
    }

    public  async Task Handle(UpdateTeamMemberCommand request, CancellationToken cancellationToken)
    {
        var teamMember = await _repository.GetTeamMemberById(request.MemberId);
        teamMember.UpdateData(request.Name,request.Email,request.Phone);
        await _repository.UpdateTeamMember(teamMember);
    }
}