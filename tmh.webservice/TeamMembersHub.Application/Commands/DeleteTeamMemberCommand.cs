using MediatR;

namespace TeamMembersHub.Application.Commands;

public class DeleteTeamMemberCommand : IRequest
{
    public Guid MemberId { get; protected set; }

    public DeleteTeamMemberCommand(Guid memberId)
    {
        MemberId = memberId;
    }
}