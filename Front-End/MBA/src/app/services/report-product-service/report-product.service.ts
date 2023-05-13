import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportTopProductDto } from 'src/app/DTOs/report-top-product-dto';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ReportProductService {

  url = 'http://localhost:8000/Product'

  constructor(private _http: HttpClient) { }

  getReportWithFilter(reportProductFilterDto: ReportProductService): Observable<Product[]> {
    return this._http.post<Product[]>(`${this.url}/report`, reportProductFilterDto);
  }

  getReportTopProducts(): Observable<ReportTopProductDto[]> {
    return this._http.get<ReportTopProductDto[]>(`${this.url}/reportTopProduct`);
  }
}
