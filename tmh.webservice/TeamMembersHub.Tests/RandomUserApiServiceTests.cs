using System.Net;
using NSubstitute;
using TeamMembersHub.Application.FetchServices;

namespace TeamMembersHub.Tests;

public class RandomUserApiServiceTests
{
    [Fact]
    public async Task GetResponse_Returns_RootModel_On_Successful_Response()
    {
        // Arrange
        var baseUrl = "https://randomuser.me/api/";
        var httpClient = Substitute.For<HttpClient>();
        httpClient.BaseAddress = new Uri(baseUrl); // Set the base address
        var apiService = new RandomUserApiService(httpClient);

        var expectedResponse = new HttpResponseMessage(HttpStatusCode.OK);
        expectedResponse.Content = new StringContent(@"{""results"":[{""name"":{""first"":""John"",""last"":""Doe""},""email"":""john@example.com"",""phone"":""1234567890"",""picture"":{""large"":""http://example.com""}}]}");
        httpClient.GetAsync("").Returns(Task.FromResult(expectedResponse)); // Use Task.FromResult to mock asynchronous method call

        // Act
        var result = await apiService.GetResponse();

        // Assert
        Assert.NotNull(result);
        Assert.Single(result.results);
        Assert.Equal("John", result.results[0].name.first);
        Assert.Equal("Doe", result.results[0].name.last);
        Assert.Equal("john@example.com", result.results[0].email);
        Assert.Equal("1234567890", result.results[0].phone);
        Assert.Equal("http://example.com", result.results[0].picture.large);
    }



    [Fact]
    public async Task GetResponse_Throws_Exception_On_Unsuccessful_Response()
    {
        // Arrange
        var baseUrl = "https://randomuser.me/api/";
        var httpClient = Substitute.For<HttpClient>();
        httpClient.BaseAddress = new Uri(baseUrl); // Set the base address
        var apiService = new RandomUserApiService(httpClient);

        var expectedResponse = new HttpResponseMessage(HttpStatusCode.InternalServerError);
        httpClient.GetAsync(Arg.Any<string>()).Returns(expectedResponse); // Using Arg.Any<string>() to match any string argument

        // Act & Assert
        await Assert.ThrowsAsync<HttpRequestException>(() => apiService.GetResponse());
    }


}