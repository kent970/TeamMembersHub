using MediatR;
using TeamMembersHub.Domain.Enums;

namespace TeamMembersHub.Application.Commands;

public class ChangeTeamMemberStatusCommand : IRequest
{
    public Guid MemberId { get; protected set; }
    public TeamMemberStatus NewStatus { get; protected set; }

    public ChangeTeamMemberStatusCommand(Guid memberId, int newStatus)
    {
        MemberId = memberId;
        NewStatus = (TeamMemberStatus)newStatus;
    }
}