using AutoMapper;
using MediatR;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.Queries;
using TeamMembersHub.Application.Repositories;

namespace TeamMembersHub.Application.QueryHandlers;

public class TeamMemberQueryHandlers : IRequestHandler<GetTeamMembersQuery, List<TeamMemberDataModel>>, IRequestHandler<GetRandomTeamMemberQuery, RandomTeamMemberDataModel>
{
    private readonly ITeamMembersRepository _repository;
    private readonly IMapper _mapper;
    private readonly IRandomUserApiService _apiService;

    public TeamMemberQueryHandlers(ITeamMembersRepository repository, IMapper mapper, IRandomUserApiService apiService)
    {
        _repository = repository;
        _mapper = mapper;
        _apiService = apiService;
    }

    public async Task<List<TeamMemberDataModel>> Handle(GetTeamMembersQuery request, CancellationToken cancellationToken)
    {
        var teamMembers = await _repository.GetTeamMembers();
        var teamMemberDataModels = _mapper.Map<List<TeamMemberDataModel>>(teamMembers);
        return teamMemberDataModels;
    }

    public async Task<RandomTeamMemberDataModel> Handle(GetRandomTeamMemberQuery request, CancellationToken cancellationToken)
    {
        var rootModel = await _apiService.GetResponse();
        var name = string.Concat(rootModel.results[0].name.first, " ", rootModel.results[0].name.last);
        var email = rootModel.results[0].email;
        var phone = rootModel.results[0].phone;
        var teamMember = new RandomTeamMemberDataModel(name, email, phone);
        return teamMember;
    }
}