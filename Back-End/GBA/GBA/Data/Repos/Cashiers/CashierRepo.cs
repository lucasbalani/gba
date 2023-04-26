using GBA.Domain.Contracts.Cashiers;
using GBA.Domain.Contracts.Sales;
using GBA.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Cashiers
{
    public class CashierRepo : GenericRepo<Cashier>, ICashierRepo
    {
        private readonly DbSet<Cashier> _dbSet;
        public CashierRepo(MbaDbContext context) : base(context) => _dbSet = context.Cashiers;
    }
}
