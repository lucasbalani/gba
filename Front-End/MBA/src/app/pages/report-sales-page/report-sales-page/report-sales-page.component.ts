import { Component } from '@angular/core';

@Component({
  selector: 'app-report-sales-page',
  templateUrl: './report-sales-page.component.html',
  styleUrls: ['./report-sales-page.component.scss']
})
export class ReportSalesPageComponent {
  emit = false;
  isLoading = false;

  toggleEmit(){
    this.emit = !this.emit    

    if(this.emit)
      this.isLoading = true;    
  }
}
