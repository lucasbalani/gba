import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageDto } from 'src/app/DTOs/home-page-dto';
import { ReportTopProductDto } from 'src/app/DTOs/report-top-product-dto';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://localhost:8000/Home'

  constructor(private _http: HttpClient) { }

  getInfoHome(): Observable<HomePageDto> {
    return this._http.get<HomePageDto>(`${this.url}`);
  }
}
