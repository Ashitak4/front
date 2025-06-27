import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { WhyComponent } from './core/pages/why/why.component';
import { WhyInvestComponent } from './core/pages/why/why-invest/why-invest.component';
import { SupportChannelComponent } from './core/pages/support-channel/support-channel.component';
import { WatchlistComponent } from './core/pages/watchlist/watchlist.component';
import { PickerComponent } from './core/pages/watchlist/picker/picker.component';

export const routes: Routes = [
  { path: '', component: WatchlistComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent},
  // { path: 'picker', component: PickerComponent },
  // {
  //   path: 'why', component: WhyComponent,
  //   children: [
  //     { path: 'investir', component: WhyInvestComponent }
  //   ]
  // },
  { path: 'soutenir', component: SupportChannelComponent },
  // { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
