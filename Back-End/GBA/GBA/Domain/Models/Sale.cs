using GBA.Domain.Enums;

namespace GBA.Domain.Models
{
    public class Sale
    {
        public long Id { get; set; }
        public PaymentType TypePayment { get; set; }
        public decimal TotalPrice { get; set; }
        public long CashierId { get; set; }
        public Cashier Cashier { get; set; }
        public DateTime SaleDate { get; set; }
        public IList<SaleItem> SaleItems { get; set; }

    }
}
