using MediatR;
using NSubstitute;
using TeamMembersHub.Application.CommandHandlers;
using TeamMembersHub.Application.Commands;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using TeamMembersHub.Domain.Enums;
using Xunit;

namespace TeamMembersHub.Tests;

public class TeamMembersCommandHandlerTests
{
    private readonly ITeamMembersRepository _repository;
    private readonly IMediator _mediator;
    private readonly IRandomUserApiService _apiService;
    private readonly TeamMemberCommandHandlers _handler;

    public TeamMembersCommandHandlerTests()
    {
        _repository = Substitute.For<ITeamMembersRepository>();
        _mediator = Substitute.For<IMediator>();
        _apiService = Substitute.For<IRandomUserApiService>();
        _handler = new TeamMemberCommandHandlers(_repository, _mediator, _apiService);
    }


    [Fact]
    public async Task Handle_AddTeamMemberCommand_AddsTeamMember()
    {
        //arrange
        var command = new AddTeamMemberCommand("Jan Kowalski", "jan@kowalski.com", "1234567890", "example.com");

        // Act
        await _handler.Handle(command, CancellationToken.None);

        // Assert
        await _repository.Received(1).AddTeamMember(Arg.Any<TeamMember>());
    }

    [Fact]
    public async Task Handle_AddRandomTeamMemberCommand_AddsRandomTeamMember()
    {
        // Arrange
        var mockRootModel = new RootModel
        {
            results = new Result[]
            {
                new Result
                {
                    name = new Name { first = "Jan", last = "Kowalski" },
                    email = "jan@kowalski.com",
                    phone = "1234567890",
                    picture = new Picture { large = "example.com" }
                }
            }
        };
        _apiService.GetResponse().Returns(Task.FromResult(mockRootModel));

        var command = new AddRandomTeamMemberCommand();

        // Act
        await _handler.Handle(command, CancellationToken.None);

        // Assert
        await _apiService.Received(1).GetResponse();
        await _mediator.Received(1).Send(Arg.Any<AddTeamMemberCommand>(), CancellationToken.None);
    }

    [Fact]
    public async Task Handle_ChangeTeamMemberStatusCommand_ChangesMemberStatus()
    {
        // Arrange
        Guid memberId = Guid.NewGuid();
        var newStatus = TeamMemberStatus.Active;
        var command = new ChangeTeamMemberStatusCommand(memberId, (int)newStatus);

        var teamMember = TeamMember.Create("name", "email", "phone", "url");
        _repository.GetTeamMemberById(memberId).Returns(Task.FromResult(teamMember));

        // Act
        await _handler.Handle(command, CancellationToken.None);

        // Assert
        await _repository.Received(1).UpdateTeamMember(Arg.Is<TeamMember>(x => x.Status == newStatus));
    }

    [Fact]
    public async Task Handle_DeleteTeamMemberCommand_DeletesMember()
    {
        // Arrange
        var memberId = Guid.NewGuid();
        var command = new DeleteTeamMemberCommand(memberId);

        // Act
        await _handler.Handle(command, CancellationToken.None);

        // Assert
        await _repository.Received(1).DeleteTeamMember(memberId);
    }

    [Fact]
    public async Task Handle_UpdateTeamMemberCommand_UpdatesMemberData()
    {
        // Arrange
        var memberId = Guid.NewGuid();
        var newName = "Jan Kowalski";
        var newEmail = "jan@kowalski.com";
        var newPhone = "1234567890";
        var command = new UpdateTeamMemberCommand(memberId, newName, newEmail, newPhone);

        var teamMember = TeamMember.Create("name", "email", "phone", "url");
        _repository.GetTeamMemberById(memberId).Returns(Task.FromResult(teamMember));

        // Act
        await _handler.Handle(command, CancellationToken.None);

        // Assert
        await _repository.Received(1)
            .UpdateTeamMember(Arg.Is<TeamMember>(x => x.Name == newName && x.Email == newEmail && x.Phone == newPhone));
    }
}