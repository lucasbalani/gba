using GBA.Data.Map;
using GBA.Domain.Contracts;
using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data
{
    public class MbaDbContext : DbContext, IMbaDbContext
    {
        public MbaDbContext(DbContextOptions<MbaDbContext> options)
            :base(options)
        {}

        public DbSet<Sale> Sales { get; set; }
        public DbSet<SaleItem> SalesItems { get; set; }
        public DbSet<Cashier> Cashiers { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new SaleMap());
            modelBuilder.ApplyConfiguration(new SaleItemMap());
            modelBuilder.ApplyConfiguration(new CashierMap());
            modelBuilder.ApplyConfiguration(new ProductMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
