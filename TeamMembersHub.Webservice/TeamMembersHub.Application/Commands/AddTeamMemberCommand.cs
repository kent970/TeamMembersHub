using MediatR;

namespace TeamMembersHub.Application.Commands;

public class AddTeamMemberCommand : IRequest
{
    public string Name { get; protected set; }
    public string Email { get; protected set; }
    public string Phone { get; protected set; }
    public AddTeamMemberCommand(string name, string email, string phone)
    {
        Name = name;
        Email = email;
        Phone = phone;
    }
}