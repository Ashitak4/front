import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockHttpService {
  private apiUrl = 'http://localhost:5000/api/';  // Flask API base URL

  constructor(private http: HttpClient) {}

  // Get the poll data
  getStockData(ticker: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stock/${ticker}`);
  }

  getCompaniesData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/companies`);
  }

  loadCompaniesData(): Observable<any> {
    return this.http.post(`${this.apiUrl}load_companies`, {});
  }
}
