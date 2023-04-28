CREATE TABLE #productTemporary (
  name Varchar(255),
  price decimal,
  expirationDate DateTime,
  typeProduct bigint
);

BULK INSERT #productTemporary
FROM 'C:\ProjectsUniversity\GbaProject\gba\Infraestrutura\CSVs\Produtos.csv'
WITH (
  FIELDTERMINATOR = ';',
  ROWTERMINATOR = '\n',
  FIRSTROW = 1
);

insert into Products
select * from #productTemporary
--drop table #productTemporary