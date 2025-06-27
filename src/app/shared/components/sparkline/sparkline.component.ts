import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.scss'],
})
export class SparklineComponent {
  @Input() data: number[] = [];
  @Input() color: string = '#EFD499'; // Default highlight color
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    elements: {
      line: {
        borderWidth: 2.5,      // Thicker for better visibility
        tension: 0.3           // Smoother curve
      },
      point: {
        radius: 0
      }
    }
  };

  ngOnChanges() {
    this.lineChartData = {
      labels: this.data.map((_, i) => i.toString()),
      datasets: [
        {
          data: this.data,
          borderColor: this.color,
          backgroundColor: 'transparent',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.3,
          spanGaps: true,
          fill: false
        }
      ],
    };
  }
}
