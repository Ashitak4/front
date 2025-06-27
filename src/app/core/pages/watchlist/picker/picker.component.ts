import { Component } from '@angular/core';
import { StockHttpService } from '../services/watchlist-http.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent {


  constructor(stockHttpService: StockHttpService) {
      // Example usage of the StockHttpService
      stockHttpService.getStockData('AAPL').subscribe({
        next: (data) => {
          console.log('Stock data:', data);
        },
        error: (error) => {
          console.error('Error fetching stock data:', error);
        }
      });
    }
}
