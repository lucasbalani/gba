import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleReportService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Sale>{

  }
}
