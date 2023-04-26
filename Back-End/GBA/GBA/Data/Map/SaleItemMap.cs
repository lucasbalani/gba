using GBA.Domain.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GBA.Data.Map
{
    public class SaleItemMap : IEntityTypeConfiguration<SaleItem>
    {
        public void Configure(EntityTypeBuilder<SaleItem> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Sale)
                   .WithMany(x => x.SaleItems)
                   .HasForeignKey(x => x.SaleId);

            builder.HasOne(x => x.Product)
                   .WithMany(x => x.SaleItems)
                   .HasForeignKey(x => x.ProductId);
        }
    }
}
