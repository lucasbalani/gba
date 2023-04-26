using GBA.Domain.Contracts.Sales;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Sales
{
    public class SaleRepo : GenericRepo<Sale> , ISaleRepo
    {
        private readonly DbSet<Sale> _dbSet;

        public SaleRepo(MbaDbContext context) : base(context) => _dbSet = context.Sales;


    }
}
