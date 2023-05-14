import { Component } from '@angular/core';
import { OptionMenu } from 'src/app/models/option-menu';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  isOpened = false;
  optionsMenu: OptionMenu[] = [
    new OptionMenu('Home', 'house', ['/']),
    new OptionMenu('Vendas', 'money-bill-trend-up', ['/sale-report']),
    new OptionMenu('Produtos', 'briefcase', ['/product-report']),
    new OptionMenu('Top Produtos', 'sort-amount-up', ['/product-top-report'])
  ]

  constructor(private _drawerService: DrawerService) { }

  ngOnInit(){
    this._drawerService.drawerToggle.subscribe({
      next: () => {
        this.isOpened = !this.isOpened
      }
    })

    
  }
}
