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
        public Task<IList<Sale>> List()
            => _productService.List();

        [HttpPost("report")]
        public Task<IList<Sale>> getProductReportWithFilter([FromBody] ProductReportFilterDto filter)
            => _productService.ListByFilter(filter);
    }
}
