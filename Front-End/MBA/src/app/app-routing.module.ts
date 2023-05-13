import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReportSalesPageComponent } from './pages/report-sales-page/report-sales-page/report-sales-page.component';
import { ReportProductsPageComponent } from './pages/report-products-page/report-products-page/report-products-page.component';
import { ReportTopProductsPageComponent } from './pages/report-top-products-page/report-top-products-page/report-top-products-page.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'sale-report', component: ReportSalesPageComponent },
      { path: 'product-report', component: ReportProductsPageComponent },
      { path: 'product-top-report', component: ReportTopProductsPageComponent },

      // { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
