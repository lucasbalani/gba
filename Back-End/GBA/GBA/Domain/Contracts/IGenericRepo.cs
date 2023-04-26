namespace GBA.Domain.Contracts
{
    public interface IGenericRepo<T>
    {
        public Task<IList<T>> Get();
        public Task<T> FindById(long id);
    }
}
