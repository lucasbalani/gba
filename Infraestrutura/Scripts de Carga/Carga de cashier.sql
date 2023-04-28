CREATE TABLE #cashierTemporary (
  name Varchar(255)
);

BULK INSERT #cashierTemporary
FROM 'C:\ProjectsUniversity\GbaProject\gba\Infraestrutura\CSVs\Cashiers.csv'
WITH (
  FIELDTERMINATOR = ';',
  ROWTERMINATOR = '\n',
  FIRSTROW = 1
);

insert into Cashiers
select * from #cashierTemporary

--drop table #cashierTemporary