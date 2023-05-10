import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportSaleFilterDto } from 'src/app/DTOs/report-sale-filter-dto';
import { Sale } from 'src/app/models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleReportService {

  constructor(private _http: HttpClient) { }

  getReportWithFilter(reportSaleFilterDto: ReportSaleFilterDto): Observable<Sale[]> {
    return this._http.post<Sale[]>(`http://localhost:8000/Sales/report`, reportSaleFilterDto);
  }
}
