using MediatR;
using NSubstitute;
using TeamMembersHub.Application.CommandHandlers;
using TeamMembersHub.Application.Commands;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using TeamMembersHub.Domain.Enums;

namespace TeamMembersHub.Tests;

public class TeamMembersCommandHandlerTests
{
    [Fact]
    public async Task Handle_AddTeamMemberCommand_AddsTeamMember()
    {
        // Arrange
        var repository = Substitute.For<ITeamMembersRepository>();
        var mediator = Substitute.For<IMediator>();
        var apiService = Substitute.For<IRandomUserApiService>();

        var handler = new TeamMemberCommandHandlers(repository, mediator, apiService);
        var command = new AddTeamMemberCommand("John Doe", "john@example.com", "1234567890", "http://example.com");

        // Act
        await handler.Handle(command, CancellationToken.None);

        // Assert
        await repository.Received(1).AddTeamMember(Arg.Any<TeamMember>());
    }

    [Fact]
    public async Task Handle_AddRandomTeamMemberCommand_AddsRandomTeamMember()
    {
        // Arrange
        var repository = Substitute.For<ITeamMembersRepository>();
        var mediator = Substitute.For<IMediator>();
        var apiService = Substitute.For<IRandomUserApiService>();

        // Create a mock response for GetResponse
        var mockRootModel = new RootModel
        {
            results = new Result[] {
                new Result
                {
                    name = new Name { first = "John", last = "Doe" },
                    email = "john@example.com",
                    phone = "1234567890",
                    picture = new Picture { large = "http://example.com" }
                }
            }
        };
        apiService.GetResponse().Returns(Task.FromResult(mockRootModel));

        var handler = new TeamMemberCommandHandlers(repository, mediator, apiService);
        var command = new AddRandomTeamMemberCommand();

        // Act
        await handler.Handle(command, CancellationToken.None);

        // Assert
        await apiService.Received(1).GetResponse();
        await mediator.Received(1).Send(Arg.Any<AddTeamMemberCommand>(), CancellationToken.None);
    }
    [Fact]
public async Task Handle_ChangeTeamMemberStatusCommand_ChangesMemberStatus()
{
    // Arrange
    var repository = Substitute.For<ITeamMembersRepository>();
    var mediator = Substitute.For<IMediator>();
    var apiService = Substitute.For<IRandomUserApiService>();

    var handler = new TeamMemberCommandHandlers(repository, mediator, apiService);
    Guid memberId = Guid.NewGuid();
    var newStatus = TeamMemberStatus.Active;
    var command = new ChangeTeamMemberStatusCommand(memberId, (int)newStatus);

    var teamMember = TeamMember.Create("name","email","phone","url");
    repository.GetTeamMemberById(memberId).Returns(Task.FromResult(teamMember));

    // Act
    await handler.Handle(command, CancellationToken.None);

    // Assert
    await repository.Received(1).UpdateTeamMember(Arg.Is<TeamMember>(x => x.Status == newStatus));
}

[Fact]
public async Task Handle_DeleteTeamMemberCommand_DeletesMember()
{
    // Arrange
    var repository = Substitute.For<ITeamMembersRepository>();
    var mediator = Substitute.For<IMediator>();
    var apiService = Substitute.For<IRandomUserApiService>();

    var handler = new TeamMemberCommandHandlers(repository, mediator, apiService);
    var memberId = Guid.NewGuid();
    var command = new DeleteTeamMemberCommand(memberId);

    // Act
    await handler.Handle(command, CancellationToken.None);

    // Assert
    await repository.Received(1).DeleteTeamMember(memberId);
}

[Fact]
public async Task Handle_UpdateTeamMemberCommand_UpdatesMemberData()
{
    // Arrange
    var repository = Substitute.For<ITeamMembersRepository>();
    var mediator = Substitute.For<IMediator>();
    var apiService = Substitute.For<IRandomUserApiService>();

    var handler = new TeamMemberCommandHandlers(repository, mediator, apiService);
    var memberId = Guid.NewGuid();
    var newName = "John Doe";
    var newEmail = "john@example.com";
    var newPhone = "1234567890";
    var command = new UpdateTeamMemberCommand(memberId, newName, newEmail, newPhone);

    var teamMember = TeamMember.Create("name","email","phone","url");
    repository.GetTeamMemberById(memberId).Returns(Task.FromResult(teamMember));

    // Act
    await handler.Handle(command, CancellationToken.None);

    // Assert
    await repository.Received(1).UpdateTeamMember(Arg.Is<TeamMember>(x =>
        x.Name == newName && x.Email == newEmail && x.Phone == newPhone));
}



}