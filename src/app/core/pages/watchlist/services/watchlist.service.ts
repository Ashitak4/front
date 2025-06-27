import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  static getPERatioColor(pe: number): string {
    const num = Number(pe);
    if (isNaN(num)) return 'transparent';

    const min = 5;
    const max = 50;
    const mid = 20;

    const clamped = Math.max(min, Math.min(num, max));

    if (Math.abs(clamped - mid) < 1) {
      return '#ffffff';
    }

  
    if (clamped < mid) {
      const ratio = (mid - clamped) / (mid - min);
      const green = 255;
      const red = Math.round(255 * ratio);
      return `rgb(${255 - red}, 255, ${255 - red})`;
    }

  
    const ratio = (clamped - mid) / (max - mid);
    const red = 255;
    const green = Math.round(255 * (1 - ratio));
    return `rgb(255, ${green}, ${green})`;
  }

  static getEPSColor(eps: number): string {
    const num = Number(eps);
    if (isNaN(num)) return 'transparent';

    const min = 0;
    const max = 20;
    const clamped = Math.max(min, Math.min(num, max));
    const ratio = (clamped - min) / (max - min);

  
    const lightness = 92 - ratio * 40;
    const saturation = 40 + ratio * 40;
    const hue = 140;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  static getDropFromHighColor(dropStr: string): string {
    if (!dropStr || !dropStr.includes('%')) return 'transparent';

    const value = parseFloat(dropStr.replace('%', ''));
    const maxDrop = -50;
    const minDrop = 0;
    const clamped = Math.max(maxDrop, Math.min(value, minDrop));
    const ratio = Math.abs(clamped) / Math.abs(maxDrop);

    const lightness = 95 - ratio * 45;
    return `hsl(120, 100%, ${lightness}%)`;
  }

  static formatMarketCap(value: number | string): string {
    const num = Number(value);
    if (isNaN(num)) return '-';

    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  }

  static formatPrice(value: number | string, currency: string = 'USD'): string {
    const num = Number(value);
    if (isNaN(num)) return '-';

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
}
