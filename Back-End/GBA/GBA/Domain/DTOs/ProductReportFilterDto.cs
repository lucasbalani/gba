using GBA.Domain.Enums;

namespace GBA.Domain.DTOs
{
    public class ProductReportFilterDto
    {
        public Decimal? Price { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public ProductType? TypeProduct { get; set; }
    }
}
