using GBA.Domain.Contracts.Services;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

using Microsoft.AspNetCore.Mvc;

namespace GBA.API.Controllers
{

    [Route("[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class SalesController : Controller
    {
        private readonly ISaleService _saleService;
        public SalesController(ISaleService saleService)
        {
            _saleService = saleService;
        }

        [HttpGet]
        public Task<IList<Sale>> List() 
            => _saleService.List();

        [HttpPost("report")]
        public Task<IList<Sale>> getSaleReportWithFilter([FromBody] SaleReportFilterDto filter) 
            => _saleService.ListByFilter(filter);
    }
}
