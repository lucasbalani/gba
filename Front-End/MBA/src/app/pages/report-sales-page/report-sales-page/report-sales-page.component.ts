import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sale } from 'src/app/models/sale';
import { SaleReportService } from 'src/app/services/sale-report-service/sale-report.service';

@Component({
  selector: 'app-report-sales-page',
  templateUrl: './report-sales-page.component.html',
  styleUrls: ['./report-sales-page.component.scss']
})
export class ReportSalesPageComponent {
  emitted = false;
  isLoading = false;

  form !: FormGroup;
  data!: Sale[];
  columns = ['typePayment', 'cashierId', 'saleDate', 'totalPrice']

  constructor(private _formBuilder: FormBuilder,
    private _serviceReportSales: SaleReportService,
    private _location: Location) { }


  ngOnInit() {
    this.createForm();
  }

  getCashierName(value: Number): string {
    switch (value) {
      case 1:
        return 'CAIXA BALCAO'
      case 2:
        return 'CAIXA PADARIA'
      case 3:
        return 'CAIXA CONVENIENCIA'
      case 4:
        return 'CAIXA DELIVERY'
    }

    return ''
  }

  getTypePaymentName(value: Number): string {
    switch (value) {
      case 1:
        return 'CRÉDITO'
      case 2:
        return 'DÉBITO'
      case 3:
        return 'À VISTA'
    }

    return 'ERROR'
  }

  createForm() {
    this.form = this._formBuilder.group({
      typePayment: [null],
      cashierId: [null],
      start: ['', Validators.required],
      end: ['', Validators.required],
    });
  }

  emit() {
    this.isLoading = true;
    const filter = this.form.value;

    this._serviceReportSales.getReportWithFilter(filter).subscribe({
      next: (sales: Sale[]) => {
        this.data = sales;

        this.emitted = true;
        this.isLoading = false;
      }
    })

  }

  backClicked(){
    this._location.back();
  }
}
