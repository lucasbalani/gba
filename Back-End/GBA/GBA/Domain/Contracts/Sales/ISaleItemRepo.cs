using GBA.Domain.Models;

namespace GBA.Domain.Contracts.Sales
{
    public interface ISaleItemRepo : IGenericRepo<SaleItem>
    {
        Task<IList<SaleItem>> ListById(IList<long> ids);
    }
}
