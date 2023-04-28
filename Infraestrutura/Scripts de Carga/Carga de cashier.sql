CREATE TABLE #cashierTemporary (
  name Varchar(255)
);

BULK INSERT #cashierTemporary
FROM 'C:\Users\ValorUp-99\Desktop\Projeto Faculdade\CSVs\Cashiers.csv'
WITH (
  FIELDTERMINATOR = ';',
  ROWTERMINATOR = '\n',
  FIRSTROW = 1
);

select * from #cashierTemporary
--drop table #cashierTemporary