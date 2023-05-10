import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SaleReportPageComponent } from './pages/sale-report-page/sale-report-page.component';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'sale-report', component: SaleReportPageComponent },

      // { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
