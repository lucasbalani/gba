using GBA.Domain.Contracts.Products;
using GBA.Domain.Contracts.Sales;
using GBA.Domain.Contracts.Services;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Application.Services
{
    public class HomeService : IHomeService
    {
        private readonly ISaleRepo _saleRepo;
        private readonly ISaleItemRepo _saleItemRepo;
        private readonly IProductRepo _productRepo;

        public HomeService(ISaleRepo saleRepo, IProductRepo productRepo, ISaleItemRepo saleItemRepo)
        {
            _saleRepo = saleRepo;
            _productRepo = productRepo;
            _saleItemRepo = saleItemRepo;
        }

        public HomePageDto GetHomeInformation()
        {
            var result = new HomePageDto();
            var items = new List<SaleGraphicDto>();

            var salesGroupedByDate = _saleRepo.ListInclude().Result.GroupBy(x => x.SaleDate.Month);

            foreach (var group in salesGroupedByDate)
            {
                var salesItems = new List<SaleItem>();

                foreach(var sale in group)
                {
                    salesItems.AddRange(sale.SaleItems);
                }

                items.Add(new SaleGraphicDto
                {
                    LabelDate = getMonthName(group.Key),
                    SalesQuantity = group.ToList().Count(),
                    SalesPrices = _saleItemRepo.ListById(salesItems.Select(x => x.Id).ToList()).Result.Sum(x => x.Product.Price)
                });
            }

            result.SaleQuantity = _saleRepo.List()
                                        .Result.Count();

            result.ProductQuantity = _productRepo.List()
                                              .Result.Count();

            result.TotalPrice = _saleItemRepo.List()
                                             .Result.Sum(x => x.Product.Price);

            result.TopProductNameSale = _productRepo.ListTop().FirstOrDefault()?.product.Name ?? "NENHUM";


            result.SalesGraphicDto = items;

            return result;
        }

        public string getMonthName(long value)
        {
            switch (value)
            {
                case 1:
                    return "Janeiro";
                case 2:
                    return "Fevereiro";
                case 3:
                    return "Março";
                case 4:
                    return "Abril";
                case 5:
                    return "Maio";
                case 6:
                    return "Junho";
                case 7:
                    return "Julho";
                case 8:
                    return "Agosto";
                case 9:
                    return "Setembro";
                case 10:
                    return "Outubro";
                case 11:
                    return "Novembro";
                case 12:
                    return "Dezembro";
            }

            return "Nothing";
        }

    }
}
