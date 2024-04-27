using AutoMapper;
using MediatR;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.Queries;
using TeamMembersHub.Application.Repositories;

namespace TeamMembersHub.Application.QueryHandlers;

public class TeamMemberQueryHandlers : IRequestHandler<GetTeamMembersQuery, List<TeamMemberDataModel>>
{
    private readonly ITeamMembersRepository _repository;
    private readonly IMapper _mapper;

    public TeamMemberQueryHandlers(ITeamMembersRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public async Task<List<TeamMemberDataModel>> Handle(GetTeamMembersQuery request, CancellationToken cancellationToken)
    {
        var teamMembers = await _repository.GetTeamMembers();
        var teamMemberDataModels = teamMembers.Select(x => _mapper.Map<TeamMemberDataModel>(x)).ToList();
        return teamMemberDataModels;
    }
}