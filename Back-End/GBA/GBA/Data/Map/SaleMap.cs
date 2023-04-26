using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GBA.Data.Map
{
    public class SaleMap : IEntityTypeConfiguration<Sale>
    {
        public void Configure(EntityTypeBuilder<Sale> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasOne(x => x.Cashier)
                   .WithMany(x => x.Sales)
                   .HasForeignKey(x => x.CashierId);
        }
    }
}
