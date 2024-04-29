using AutoMapper;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Domain.Aggregates.TeamMember;

namespace TeamMembersHub.Application.Profiles;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<TeamMember, TeamMemberDataModel>();
    }
}