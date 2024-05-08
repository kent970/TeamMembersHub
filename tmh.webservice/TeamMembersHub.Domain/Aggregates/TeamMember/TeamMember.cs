using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeamMembersHub.Domain.Enums;

namespace TeamMembersHub.Domain.Aggregates.TeamMember;

public class TeamMember
{
    [Key] public Guid Id { get; protected set; }
    [Required] public string Name { get; protected set; }
    [Required] public string Email { get; protected set; }
    [Required] public string Phone { get; protected set; }

    [Required]
    [Column(TypeName = "timestamp without time zone")]
    public DateTime CreatedAt { get; protected set; }

    [Required] public TeamMemberStatus Status { get; protected set; }
    public string ImageUrl { get; protected set; }

    private TeamMember(string name, string email, string phone, string imageUrl)
    {
        Id = Guid.NewGuid();
        Name = name;
        Email = email;
        Phone = phone;
        CreatedAt = DateTime.Now;
        Status = TeamMemberStatus.Active;
        ImageUrl = imageUrl;
    }

    public static TeamMember Create(string name, string email, string phone, string imageUrl) => new TeamMember(name, email, phone, imageUrl);

    public void ChangeStatus(TeamMemberStatus status)
    {
        Status = status;
    }

    public void UpdateData(string name, string email, string phone)
    {
        Name = name;
        Email = email;
        Phone = phone;
    }
}