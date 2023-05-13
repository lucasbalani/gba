using GBA.Domain.Models;

namespace GBA.Domain.DTOs
{
    public class ProductTopReportDto
    {
        public Product product { get; set; }
        public long quantitySale { get; set; }
    }
}
