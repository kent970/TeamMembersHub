using MediatR;
using TeamMembersHub.Application.Commands;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;

namespace TeamMembersHub.Application.CommandHandlers;

public class TeamMemberCommandHandlers :
    IRequestHandler<AddTeamMemberCommand>,
    IRequestHandler<ChangeTeamMemberStatusCommand>,
    IRequestHandler<DeleteTeamMemberCommand>,
    IRequestHandler<UpdateTeamMemberCommand>,
    IRequestHandler<AddRandomTeamMemberCommand>
{
    private readonly ITeamMembersRepository _repository;
    private readonly IMediator _mediator;
    private readonly IRandomUserApiService _apiService;

    public TeamMemberCommandHandlers(ITeamMembersRepository repository, IMediator mediator, IRandomUserApiService apiService)
    {
        _repository = repository;
        _mediator = mediator;
        _apiService = apiService;
    }

    public async Task Handle(AddTeamMemberCommand request, CancellationToken cancellationToken)
    {
        var teamMember = TeamMember.Create(request.Name, request.Email, request.Phone, request.ImageUrl);
        await _repository.AddTeamMember(teamMember);
    }

    public async Task Handle(AddRandomTeamMemberCommand request, CancellationToken cancellationToken)
    {
        var rootModel = await _apiService.GetResponse();
        var name = string.Concat(rootModel.results[0].name.first, " ", rootModel.results[0].name.last);
        var email = rootModel.results[0].email;
        var phone = rootModel.results[0].phone;
        var imageUrl = rootModel.results[0].picture.large;

        await _mediator.Send(new AddTeamMemberCommand(name, email, phone, imageUrl));
    }

    public async Task Handle(ChangeTeamMemberStatusCommand request, CancellationToken cancellationToken)
    {
        var teamMember = await _repository.GetTeamMemberById(request.MemberId);
        teamMember.ChangeStatus(request.NewStatus);
        await _repository.UpdateTeamMember(teamMember);
    }

    public async Task Handle(DeleteTeamMemberCommand request, CancellationToken cancellationToken)
    {
        await _repository.DeleteTeamMember(request.MemberId);
    }

    public async Task Handle(UpdateTeamMemberCommand request, CancellationToken cancellationToken)
    {
        var teamMember = await _repository.GetTeamMemberById(request.MemberId);
        teamMember.UpdateData(request.Name, request.Email, request.Phone);
        await _repository.UpdateTeamMember(teamMember);
    }
}