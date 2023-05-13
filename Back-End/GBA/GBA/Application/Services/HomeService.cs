using GBA.Domain.Contracts.Products;
using GBA.Domain.Contracts.Sales;
using GBA.Domain.Contracts.Services;
using GBA.Domain.DTOs;

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

            result.SaleQuantity = _saleRepo.List()
                                        .Result.Count();

            result.ProductQuantity = _productRepo.List()
                                              .Result.Count();

            result.TotalPrice = _saleItemRepo.List()
                                             .Result.Sum(x => x.Product.Price);

            result.TopProductNameSale = _productRepo.ListTop().FirstOrDefault()?.product.Name ?? "NENHUM";

            return result;
        }
    }
}
