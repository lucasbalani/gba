import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ReportProductService } from 'src/app/services/report-product-service/report-product.service';

@Component({
  selector: 'app-report-products-page',
  templateUrl: './report-products-page.component.html',
  styleUrls: ['./report-products-page.component.scss']
})
export class ReportProductsPageComponent {
  emitted = false;
  isLoading = false;

  form !: FormGroup;
  data!: Product[];
  columns = ['name', 'typeProduct', 'expirationDate', 'price']

  constructor(private _formBuilder: FormBuilder,
    private _serviceReportProduct: ReportProductService,
    private _location: Location) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this._formBuilder.group({
      price: [null],
      expirationDate: [null],
      typeProduct: [null]
    });
  }

  emit() {
    this.isLoading = true;
    const filter = this.form.value;

    this._serviceReportProduct.getReportWithFilter(filter).subscribe({
      next: (products: Product[]) => {
        this.data = products;

        this.emitted = true;
        this.isLoading = false;
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

  backClicked(){
    this._location.back();
  }
}
