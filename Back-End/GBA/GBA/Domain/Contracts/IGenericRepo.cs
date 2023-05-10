namespace GBA.Domain.Contracts
{
    public interface IGenericRepo<T>
    {
        public Task<IList<T>> List();
        public Task<T> FindById(long id);
    }
}
