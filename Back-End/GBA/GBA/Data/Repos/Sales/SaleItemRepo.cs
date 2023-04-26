using GBA.Domain.Contracts.Sales;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Sales
{
    public class SaleItemRepo : GenericRepo<SaleItem>, ISaleItemRepo
    {
        private readonly DbSet<SaleItem> _dbSet;
        public SaleItemRepo(MbaDbContext context) : base (context) => _dbSet = context.SalesItems;
    }
}
