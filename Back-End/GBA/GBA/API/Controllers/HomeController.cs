using GBA.Domain.Contracts.Services;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

using Microsoft.AspNetCore.Mvc;

namespace GBA.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class HomeController : Controller
    {
        private readonly IHomeService _service;
        public HomeController(IHomeService service)
        {
            _service = service;
        }

        [HttpGet]
        public HomePageDto List()
            => _service.GetHomeInformation();

    }
}
