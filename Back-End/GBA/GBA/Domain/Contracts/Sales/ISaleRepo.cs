using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Domain.Contracts.Sales
{
    public interface ISaleRepo : IGenericRepo<Sale>
    {
        Task<IList<Sale>> ListByFilter(SaleReportFilterDto filter);
        Task<IList<Sale>> ListInclude();
    }
}
