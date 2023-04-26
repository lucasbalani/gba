namespace GBA.Domain.Models
{
    public class SaleItem
    {
        public long Id { get; set; }
        public long SaleId { get; set; }
        public Sale Sale { get; set; }
        public long ProductId { get; set; }
        public Product Product { get; set; }
        public long Quantity { get; set; }
    }
}
