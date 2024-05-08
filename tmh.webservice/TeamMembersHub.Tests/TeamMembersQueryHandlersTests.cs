using AutoMapper;
using NSubstitute;
using TeamMembersHub.Application.DataModels;
using TeamMembersHub.Application.FetchServices;
using TeamMembersHub.Application.Queries;
using TeamMembersHub.Application.QueryHandlers;
using TeamMembersHub.Application.Repositories;
using TeamMembersHub.Domain.Aggregates.TeamMember;
using Xunit;
namespace TeamMembersHub.Tests;

public class TeamMembersQueryHandlersTests
{
    private readonly ITeamMembersRepository _repository;
    private readonly IMapper _mapper;
    private readonly IRandomUserApiService _apiService;
    private readonly TeamMemberQueryHandlers _handler;

    public TeamMembersQueryHandlersTests()
    {
        _repository = Substitute.For<ITeamMembersRepository>();
        _mapper = Substitute.For<IMapper>();
        _apiService = Substitute.For<IRandomUserApiService>();
        _handler = new TeamMemberQueryHandlers(_repository, _mapper, _apiService);
    }
    
    [Fact]
        public async Task Handle_GetTeamMembersQuery_Returns_TeamMemberDataModels()
        {
            // Arrange
            var request = new GetTeamMembersQuery();

            var teamMembers = new List<TeamMember>(); 
            var teamMemberDataModels = new List<TeamMemberDataModel>();
            _mapper.Map<List<TeamMemberDataModel>>(Arg.Any<List<TeamMember>>()).Returns(teamMemberDataModels);
            _repository.GetTeamMembers().Returns(teamMembers);

            // Act
            var result = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Same(teamMemberDataModels, result);
            await _repository.Received(1).GetTeamMembers();
            _mapper.Received(1).Map<List<TeamMemberDataModel>>(teamMembers);
        }

    [Fact]
    public async Task Handle_GetRandomTeamMemberQuery_Returns_RandomTeamMemberDataModel()
    {
        // Arrange
        var request = new GetRandomTeamMemberQuery();
        
        var rootModel = new RootModel
        {
            results = new Result[] {
                new Result
                {
                    name = new Name { first = "Jan", last = "Kowalski" },
                    email = "jan@kowalski.com",
                    phone = "1234567890"
                }
            }
        };
        _apiService.GetResponse().Returns(Task.FromResult(rootModel));

        // Act
        var result = await _handler.Handle(request, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Jan Kowalski", result.Name);
        Assert.Equal("jan@kowalski.com", result.Email);
        Assert.Equal("1234567890", result.Phone);
    }

}