using GBA.Domain.Enums;

namespace GBA.Domain.DTOs
{
    public class SaleReportFilterDto
    {
        public PaymentType? PaymentType { get; set; }
        public int? CashierId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }
}
