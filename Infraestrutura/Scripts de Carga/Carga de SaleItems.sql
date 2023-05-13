CREATE TABLE #saleItemTemporary (
  saleId bigint,
  productId bigint,
  quantity bigint
);

BULK INSERT #saleItemTemporary
FROM 'C:\ProjectsUniversity\GbaProject\gba\Infraestrutura\CSVs\SaleItems.csv'
WITH (
  FIELDTERMINATOR = ';',
  ROWTERMINATOR = '\n',
  FIRSTROW = 1
);

insert into SalesItems
select * from #saleItemTemporary
--drop table #saleItemTemporary