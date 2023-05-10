using GBA.Domain.Contracts;

using Microsoft.EntityFrameworkCore;

namespace GBA.Data.Repos
{
    public class GenericRepo<T> : IGenericRepo<T> where T : class
    {
        private readonly DbSet<T> _dbSet;

        public GenericRepo(IMbaDbContext context)
            => _dbSet = context.Set<T>();

        /// <summary>
        /// Get all informations.
        /// </summary>
        public async Task<IList<T>> List()
            => await _dbSet.ToListAsync();


        /// <summary>
        /// Find by id.
        /// </summary>
        /// <param name="id"></param>
        public async Task<T> FindById(long id)
            => await _dbSet.FindAsync(id);
    }
}
