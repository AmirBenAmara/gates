import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WaveShareService {
  apiUrl: string = 'ChangeWithApiUrL';

  constructor(private http: HttpClient) { }

  
  getWaveShares(): Observable<WaveShare[]> {
    return this.http.get<WaveShare[]>(`${this.apiUrl}`);
  }

  getWaveShareById(ctrPanelId: number): Observable<WaveShare[]> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.get<WaveShare[]>(url);
  }
  createWaveShare(ctrPanel: WaveShare): Observable<WaveShare> {
    return this.http.post<WaveShare>(this.apiUrl, ctrPanel);
  }

  updateWaveShare(ctrPanelId: number, ctrPanel: WaveShare): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.put<void>(url, ctrPanel);
  }
  
  deleteWaveShare(ctrPanelId: number): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.delete<void>(url);
  }

  
}
export interface WaveShare {
  id: number;
  ipAddress: string;
  serialNumber: string;
  name: string;
  doorId?: number;
}