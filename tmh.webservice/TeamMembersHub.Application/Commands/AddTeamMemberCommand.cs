using MediatR;

namespace TeamMembersHub.Application.Commands;

public class AddTeamMemberCommand : IRequest
{
    public string Name { get; protected set; }
    public string Email { get; protected set; }
    public string Phone { get; protected set; }
    public string ImageUrl { get; set; }
    public AddTeamMemberCommand(string name, string email, string phone, string imageUrl)
    {
        Name = name;
        Email = email;
        Phone = phone;
        ImageUrl = imageUrl;
    }
}