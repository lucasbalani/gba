using Microsoft.AspNetCore.Mvc;
using GBA.Domain.DTOs;
using GBA.Domain.Models;
using GBA.Domain.Contracts.Services;

namespace GBA.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public Task<IList<Product>> List()
            => _productService.List();

        [HttpPost("report")]
        public async Task<IList<Product>> getProductReportWithFilter([FromBody] ProductReportFilterDto filter)
            => await _productService.ListByFilter(filter);
    }
}
