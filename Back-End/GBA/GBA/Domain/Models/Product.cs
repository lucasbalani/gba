using GBA.Domain.Enums;

using System.ComponentModel.DataAnnotations;

namespace GBA.Domain.Models
{
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public Decimal Price { get; set; }
        public DateTime ExpirationDate { get; set; }
        public ProductType TypeProduct { get; set;}
        public IList<SaleItem> SaleItems { get; set; }
    }
}
