using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using TeamMembersHub.Infrastructure.Contexts;

namespace TeamMembersHub.Infrastructure;

public class DatabaseInitializer
{
    // public static void Seed(WebApplicationBuilder applicationBuilder)
    // {
    //     using (var serviceScope = applicationBuilder.Services)
    //     {
    //         var context = serviceScope.Get<TeamMembersDbContext>();
    //         
    //         
    //         if (!context.TeamMembers.Any())
    //         {
    //             //context.Database.Migrate();
    //             
    //             var membersToAdd = new List<TeamMember>
    //             {
    //                 TeamMember.Create("Jan Kowalski","j.kowalski@gmail.com","123456789"),
    //                 TeamMember.Create("Jan Nowak","j.nowak@gmail.com","123456999"),
    //                 TeamMember.Create("Michał Kowalski","m.kowalski@gmail.com","678122999"),
    //                 TeamMember.Create("Michał Nowak","m.nowak@gmail.com","122226789")
    //             };
    //
    //             context.TeamMembers.AddRange(membersToAdd);
    //             context.SaveChanges();
    //         }
    //     }
    // }
}

