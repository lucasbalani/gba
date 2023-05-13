using GBA.Domain.Contracts.Products;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Products
{
    public class ProductRepo : GenericRepo<Product>, IProductRepo
    {
        private readonly DbSet<Product> _dbSet;
        private readonly DbSet<SaleItem> _dbSetSaleItem;
        public ProductRepo(MbaDbContext context) : base(context)
        {
            _dbSet = context.Products;
            _dbSetSaleItem = context.SalesItems;
        }

        public async Task<IList<Product>> ListByFilter(ProductReportFilterDto filter)
        {
            var query = _dbSet.ToList();

            if (filter.ExpirationDate != null)
                query = query.Where(x => x.ExpirationDate.Date == filter.ExpirationDate).ToList();

            if (filter.Price != null)
                query = query.Where(x => x.Price <= filter.Price).ToList();

            if (filter.TypeProduct != null)
                query = query.Where(x => x.TypeProduct == filter.TypeProduct).ToList();

            return query.OrderBy(x => x.Name).ThenBy(x => x.TypeProduct).ThenBy(x => x.ExpirationDate).ToList();
        }

        public IList<ProductTopReportDto> ListTop()
        {
            var result = new List<ProductTopReportDto>();

            var itensGroupedByProduct = _dbSetSaleItem.GroupBy(x => x.ProductId).ToList();

            foreach (var group in itensGroupedByProduct)
            {
                var quantity = group.ToList().Sum(x => x.Quantity);

                var product = _dbSet.Where(x => x.Id == group.Key).FirstOrDefault();

                if (product == null)
                    continue;

                result.Add(new ProductTopReportDto
                {
                    product = product,
                    quantitySale = quantity
                });
            }

            return result.OrderByDescending(x => x.quantitySale).ToList();
        }
    }
}
