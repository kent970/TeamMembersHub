using MediatR;

namespace TeamMembersHub.Application.Commands;

public class UpdateTeamMemberCommand : IRequest
{
    public Guid MemberId { get; protected set; }
    public string Name { get; protected set; }
    public string Email { get; protected set; }
    public string Phone { get; protected set; }

    public UpdateTeamMemberCommand(Guid memberId, string name, string email, string phone)
    {
        MemberId = memberId;
        Name = name;
        Email = email;
        Phone = phone;
    }
}