using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Domain.Contracts.Services
{
    public interface ISaleService
    {
        Task<IList<Sale>> List();
        Task<IList<Sale>> ListByFilter(SaleReportFilterDto filter);
    }
}
