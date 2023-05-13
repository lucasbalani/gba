using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Domain.Contracts.Products
{
    public interface IProductRepo : IGenericRepo<Product>
    {
        Task<IList<Product>> ListByFilter(ProductReportFilterDto filter);
        IList<ProductTopReportDto> ListTop();

    }
}
