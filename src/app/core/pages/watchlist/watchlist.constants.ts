export interface Company {
  ticker: string;
  name: string;
  market_cap: string;
  currency: string;
  price: string;
  high_price: string;
  drop_from_high: string;
  pe: number;
  daily_change: string;
  eps: number;
  sector: string;
  moat: string;
  price_history: number[];
}
