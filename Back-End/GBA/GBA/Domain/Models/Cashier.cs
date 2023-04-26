namespace GBA.Domain.Models
{
    public class Cashier
    {
        public long Id { get; set; }
        public string CashierName { get; set; }
        public IList<Sale> Sales { get; set; }
    }
}
