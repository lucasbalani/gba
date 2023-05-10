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

            if (filter.PaymentType != null)
                query = query.Where(x => x.TypePayment == filter.PaymentType).ToList();

            if (filter.CashierId != null)
                query = query.Where(x => x.CashierId == filter.CashierId).ToList();

            return query;
        }
    }
}
