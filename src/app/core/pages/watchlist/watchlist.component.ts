import { Component } from '@angular/core';
import { StockHttpService } from './services/watchlist-http.service';
import { Company } from './watchlist.constants';
import { finalize } from 'rxjs';
import { WatchlistService } from './services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent {
  tableData: Company[] = [];
  isLoading = false;

  constructor(private stockHttpService: StockHttpService) {
    stockHttpService.getCompaniesData().subscribe({
      next: this.handleCompaniesData.bind(this),
      error: this.handleError.bind(this),
    });
  }

  handleCompaniesData(data: any) {
    console.log('Stock data:', data);
    this.tableData = data;
  }

  handleError(error: any) {
    console.error('Error fetching stock data:', error);
  }

  loadCompaniesPEA() {
    this.isLoading = true;
    this.stockHttpService
      .loadCompaniesData()
      .pipe(
        finalize(() => (this.isLoading = false)) // Always runs
      )
      .subscribe({
        next: this.handleCompaniesData.bind(this),
        error: this.handleError.bind(this),
      });
  }

  getPERatioColor(pe: number): string {
    return WatchlistService.getPERatioColor(pe);
  }

  getEPSColor(pe: number): string {
    return WatchlistService.getEPSColor(pe);
  }

  getDropFromHighColor(dropStr: string): string {
    return WatchlistService.getDropFromHighColor(dropStr);
  }

  formatMarketCap(value: number | string): string {
    return WatchlistService.formatMarketCap(value);
  }

  formatPrice(value: number | string, currency: string = 'USD'): string {
    return WatchlistService.formatPrice(value, currency);
  }


}


