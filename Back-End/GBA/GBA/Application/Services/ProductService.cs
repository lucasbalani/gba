using GBA.Domain.Contracts.Products;
using GBA.Domain.Contracts.Services;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepo _repo;
        public ProductService(IProductRepo productRepo)
        {
            _repo = productRepo;
        }

        public async Task<IList<Product>> List()
            => await _repo.List();

        public async Task<IList<Product>> ListByFilter(ProductReportFilterDto filter)
            => await _repo.ListByFilter(filter);

        public IList<ProductTopReportDto> ListTop()
            => _repo.ListTop();
    }
}
