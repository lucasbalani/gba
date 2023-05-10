using GBA.Domain.Contracts.Sales;
using GBA.Domain.Contracts.Services;
using GBA.Domain.DTOs;
using GBA.Domain.Models;

namespace GBA.Application.Services
{
    public class SaleService : ISaleService
    {
        private readonly ISaleRepo _repo;
        public SaleService(ISaleRepo saleRepo)
        {
            _repo = saleRepo;
        }
        public async Task<IList<Sale>> List()
            => await _repo.List();

        public async Task<IList<Sale>> ListByFilter(SaleReportFilterDto filter)
            => await _repo.ListByFilter(filter);
    }
}
