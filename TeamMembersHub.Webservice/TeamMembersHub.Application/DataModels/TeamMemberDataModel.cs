using TeamMembersHub.Domain.Enums;

namespace TeamMembersHub.Application.DataModels;

public class TeamMemberDataModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public DateTime CreatedAt { get; set; }
    public TeamMemberStatus Status { get; set; }

    public TeamMemberDataModel(Guid id, DateTime createdAt, TeamMemberStatus status, string name, string email, string phone)
    {
        Id = id;
        CreatedAt = createdAt;
        Status = status;
        Name = name;
        Email = email;
        Phone = phone;
    }
}