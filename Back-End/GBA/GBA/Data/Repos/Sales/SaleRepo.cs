using GBA.Domain.Contracts.Sales;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Sales
{
    public class SaleRepo : GenericRepo<Sale>, ISaleRepo
    {
        private readonly DbSet<Sale> _dbSet;

        public SaleRepo(MbaDbContext context) : base(context) => _dbSet = context.Sales;

        public async Task<IList<Sale>> ListByFilter(SaleReportFilterDto filter)
        {
            var query = _dbSet.Where(x => x.SaleDate.Date >= filter.Start.Date &&
                                          x.SaleDate.Date <= filter.End.Date).Include(x => x.SaleItems).ToList();

            if (filter.TypePayment != null)
                query = query.Where(x => x.TypePayment == filter.TypePayment).ToList();

            if (filter.CashierId != null)
                query = query.Where(x => x.CashierId == filter.CashierId).ToList();

            return query.OrderBy(x => x.TypePayment).ThenBy(x => x.SaleDate).ToList();
        }

        public async Task<IList<Sale>> ListInclude()
            => await _dbSet.Include(x => x.SaleItems).ToListAsync();
    }
}
