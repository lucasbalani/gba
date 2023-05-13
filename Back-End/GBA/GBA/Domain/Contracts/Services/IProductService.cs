using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Domain.Contracts.Services
{
    public interface IProductService
    {
        Task<IList<Product>> List();
        IList<ProductTopReportDto> ListTop();
        Task<IList<Product>> ListByFilter(ProductReportFilterDto filter);
    }
}
