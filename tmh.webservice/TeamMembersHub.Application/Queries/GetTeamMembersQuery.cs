using MediatR;
using TeamMembersHub.Application.DataModels;

namespace TeamMembersHub.Application.Queries;

public class GetTeamMembersQuery : IRequest<List<TeamMemberDataModel>>
{
}