import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { WhyInvestModule } from './pages/why/why-invest/why-invest.module';
import { WhyModule } from './pages/why/why.module';
import { SupportChannelModule } from './pages/support-channel/support-channel.module';
import { WatchlistModule } from './pages/watchlist/watchlist.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    WhyModule,
    SupportChannelModule,
    WatchlistModule
  ],
  exports: [
  ]
})
export class CoreModule {}
