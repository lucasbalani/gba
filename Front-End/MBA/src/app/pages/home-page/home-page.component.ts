import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomePageDto } from 'src/app/DTOs/home-page-dto';
import { HomeService } from 'src/app/services/home-service/home-service';

import { Chart } from 'chart.js';
import { LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale } from 'chart.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  homePageDto!: HomePageDto;
  @ViewChild('myChart', { static: false }) myChart: ElementRef | undefined;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.load();
  }

  ngAfterViewInit(): void {
    const ctx = this.myChart?.nativeElement.getContext('2d');
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          backgroundColor: "aqua",
          label: "Meses",
          data: [10, 20, 30, 40, 50, 60, 70],
          borderWidth: 1,
          borderColor: "#FA8072",
          
        }]
      },
      options: {
        layout: {
          autoPadding: true
        },
        
        scales: {
          x: {

          }
        }
      }
    });
  }

  load() {
    this._homeService.getInfoHome().subscribe({
      next: (data: HomePageDto) => {
        this.homePageDto = data;
      }
    })
  }

  createChart() {

    setTimeout(() => {

    }, 100)
  }

}
