using Microsoft.EntityFrameworkCore;

namespace GBA.Domain.Contracts
{
    public interface IMbaDbContext
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;

    }
}
