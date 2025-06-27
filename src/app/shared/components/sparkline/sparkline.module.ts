import { NgModule } from '@angular/core';
import { SparklineComponent } from './sparkline.component';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SparklineComponent
  ],
  imports: [
    NgChartsModule,
    CommonModule
  ],
  exports: [
    SparklineComponent
  ]
})
export class SparklineModule {}
