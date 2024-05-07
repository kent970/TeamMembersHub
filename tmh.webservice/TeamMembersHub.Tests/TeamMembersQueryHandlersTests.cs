using AutoMapper;
using NSubstitute;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.Queries;
using TeamMembersHub.Application.QueryHandlers;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;

namespace TeamMembersHub.Tests;

public class TeamMembersQueryHandlersTests
{
    [Fact]
        public async Task Handle_GetTeamMembersQuery_Returns_TeamMemberDataModels()
        {
            // Arrange
            var repository = Substitute.For<ITeamMembersRepository>();
            var mapper = Substitute.For<IMapper>();
            var apiService = Substitute.For<IRandomUserApiService>();

            var handler = new TeamMemberQueryHandlers(repository, mapper, apiService);
            var request = new GetTeamMembersQuery();

            var teamMembers = new List<TeamMember>(); // Mocked team members
            var teamMemberDataModels = new List<TeamMemberDataModel>(); // Mocked data models
            mapper.Map<List<TeamMemberDataModel>>(Arg.Any<List<TeamMember>>()).Returns(teamMemberDataModels);
            repository.GetTeamMembers().Returns(teamMembers);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Same(teamMemberDataModels, result);
            await repository.Received(1).GetTeamMembers();
            mapper.Received(1).Map<List<TeamMemberDataModel>>(teamMembers);
        }

    [Fact]
    public async Task Handle_GetRandomTeamMemberQuery_Returns_RandomTeamMemberDataModel()
    {
        // Arrange
        var repository = Substitute.For<ITeamMembersRepository>();
        var mapper = Substitute.For<IMapper>();
        var apiService = Substitute.For<IRandomUserApiService>();

        var handler = new TeamMemberQueryHandlers(repository, mapper, apiService);
        var request = new GetRandomTeamMemberQuery();

        // Mock a non-null RootModel with at least one result
        var rootModel = new RootModel
        {
            results = new Result[] {
                new Result
                {
                    name = new Name { first = "John", last = "Doe" },
                    email = "john@example.com",
                    phone = "1234567890"
                }
            }
        };
        apiService.GetResponse().Returns(Task.FromResult(rootModel));

        // Act
        var result = await handler.Handle(request, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal("John Doe", result.Name);
        Assert.Equal("john@example.com", result.Email);
        Assert.Equal("1234567890", result.Phone);
    }

}