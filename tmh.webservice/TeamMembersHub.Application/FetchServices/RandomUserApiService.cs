using System.Text.Json;
using TeamMembersHub.Application.DataModels;

namespace TeamMembersHub.Application.FetchServices;

public interface IRandomUserApiService
{
    Task<RootModel> GetResponse();
}

public class RandomUserApiService : IRandomUserApiService
{
    private readonly HttpClient _httpClient;

    public RandomUserApiService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<RootModel> GetResponse()
    {
        var response = await _httpClient.GetAsync("");

        if (!response.IsSuccessStatusCode)
            throw new HttpRequestException($"Failed to fetch data from API. Status code: {response.StatusCode}");

        var resultString = await response.Content.ReadAsStringAsync();
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        var resultRootModel = JsonSerializer.Deserialize<RootModel>(resultString, options);

        return resultRootModel;
    }
}