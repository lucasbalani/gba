using GBA.Domain.Contracts.Products;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Products
{
    public class ProductRepo : GenericRepo<Product>, IProductRepo
    {
        private readonly DbSet<Product> _dbSet;
        public ProductRepo(MbaDbContext context) : base(context) => _dbSet = context.Products;

        public async Task<IList<Product>> ListByFilter(ProductReportFilterDto filter)
        {
            var query = _dbSet.Where(x => x.ExpirationDate.Date == filter.ExpirationDate).ToList();

            if (filter.Price != null)
                query = query.Where(x => x.Price <= filter.Price).ToList();

            if (filter.TypeProduct != null)
                query = query.Where(x => x.TypeProduct == filter.TypeProduct).ToList();

            return query;
        }
    }
}
