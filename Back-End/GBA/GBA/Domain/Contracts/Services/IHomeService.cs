using GBA.Domain.DTOs;

namespace GBA.Domain.Contracts.Services
{
    public interface IHomeService
    {
        HomePageDto GetHomeInformation();
        string getMonthName(long value);
    }
}
