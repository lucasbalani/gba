using GBA.Application.Services;
using GBA.Data;
using GBA.Data.Repos.Cashiers;
using GBA.Data.Repos.Products;
using GBA.Data.Repos.Sales;
using GBA.Domain.Contracts.Cashiers;
using GBA.Domain.Contracts.Products;
using GBA.Domain.Contracts.Sales;
using GBA.Domain.Contracts.Services;

using Microsoft.EntityFrameworkCore;

using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddEntityFrameworkSqlServer()
    .AddDbContext<MbaDbContext>(
        options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
    );

builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

#region IOC Repos
builder.Services.AddScoped<ISaleRepo, SaleRepo>();
builder.Services.AddScoped<ISaleItemRepo, SaleItemRepo>();
builder.Services.AddScoped<IProductRepo, ProductRepo>();
builder.Services.AddScoped<ICashierRepo, CashierRepo>();
builder.Services.AddScoped<ISaleService, SaleService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IHomeService, HomeService>();

#endregion


builder.Services.AddCors(options => options.AddPolicy("AllowCors", builder =>
{
    builder.SetIsOriginAllowed(_ => true)
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowAnyOrigin();
}));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowCors");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
