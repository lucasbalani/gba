CREATE TABLE #productTemporary (
  name Varchar(255),
  price decimal,
  expirationDate DateTime,
  typeProduct bigint
);

BULK INSERT #productTemporary
FROM 'C:\Users\ValorUp-99\Desktop\Projeto Faculdade\CSVs\Produtos.csv'
WITH (
  FIELDTERMINATOR = ';',
  ROWTERMINATOR = '\n',
  FIRSTROW = 1
);

select * from #productTemporary
--drop table #productTemporary