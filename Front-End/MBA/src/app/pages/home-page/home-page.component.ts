import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomePageDto } from 'src/app/DTOs/home-page-dto';
import { HomeService } from 'src/app/services/home-service/home-service';

import { Chart } from 'chart.js';
import { LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale } from 'chart.js';
import { SaleGraphicDto } from 'src/app/DTOs/sale-graphic-dto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  homePageDto!: HomePageDto;
  labelsMonth: string[] = [];
  valuesQuantitySales: number[] = [0];
  valuesPriceSales: number[] = [0];
  isLoading = true;


  @ViewChild('myChart', { static: false }) myChart: ElementRef | undefined;
  @ViewChild('myChartSalePrice', { static: false }) myChartSalePrice: ElementRef | undefined;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.load();
  }

  ngAfterViewInit(): void {
    const ctx = this.myChart?.nativeElement.getContext('2d');
    const ctx2 = this.myChartSalePrice?.nativeElement.getContext('2d');

    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale)

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labelsMonth,
        datasets: [{
          backgroundColor: "aqua",
          data: this.valuesQuantitySales,
          borderWidth: 2,
          borderColor: "#FA8072"
        }]
      },
      options: {
        plugins: {
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false
          }
        },
        layout: {
          autoPadding: true
        },
        scales: {
          y: {
            ticks: {
              color: 'white'
            },
          },
          x: {
            ticks: {
              color: 'white'
            }
          }
        }
      }
    });

    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: this.labelsMonth,
        datasets: [{
          backgroundColor: "aqua",
          data: this.valuesPriceSales,
          borderWidth: 2,
          borderColor: "#FA8072"
        }]
      },
      options: {
        plugins: {
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false
          }
        },
        layout: {
          autoPadding: true
        },
        scales: {
          y: {
            ticks: {
              color: 'white'
            },
          },
          x: {
            ticks: {
              color: 'white'
            }
          }
        }
      }
    });
  }

  load() {
    this.isLoading = true;

    this._homeService.getInfoHome().subscribe({
      next: (data: HomePageDto) => {
        this.homePageDto = data;

        // Carrega datasets e labels do grafico.
        data.salesGraphicDto.map((item: SaleGraphicDto) => (
          this.labelsMonth.push(item.labelDate),
          this.valuesQuantitySales.push(item.salesQuantity),
          this.valuesPriceSales.push(item.salesPrices)
        ))

        this.isLoading = false;
      }
    })
  }

}
