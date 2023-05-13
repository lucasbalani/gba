import { Component } from '@angular/core';
import { ReportProductFilterDto } from 'src/app/DTOs/report-product-filter-dto';
import { ReportTopProductDto } from 'src/app/DTOs/report-top-product-dto';
import { ReportProductService } from 'src/app/services/report-product-service/report-product.service';

@Component({
  selector: 'app-report-top-products-page',
  templateUrl: './report-top-products-page.component.html',
  styleUrls: ['./report-top-products-page.component.scss']
})
export class ReportTopProductsPageComponent {
  data!: ReportTopProductDto[];
  columns = ['name', 'typeProduct', 'expirationDate', 'price', 'quantitySale']

  constructor (private _service: ReportProductService){}

  ngOnInit(){
    this.list();
  }

  list(){
    this._service.getReportTopProducts().subscribe({
      next: (products: ReportTopProductDto[]) => {
        this.data = products;
      }
    })
  }
  
  getNameTypeProduct(value: Number): string{
    switch(value){
      case 1:
        return 'ALIMENTO'
        case 2:
        return 'BEBIDA'
    }

    return 'ERRO';
  }
}
