using GBA.Domain.Contracts.Products;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos.Products
{
    public class ProductRepo : GenericRepo<Product>, IProductRepo
    {
        private readonly DbSet<Product> _dbSet;
        public ProductRepo(MbaDbContext context) : base(context) => _dbSet = context.Products;
    }
}
