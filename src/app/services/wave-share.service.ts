import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaveShareService {
  apiUrl: string = environment.apiUrl + 'WaveShare';

  constructor(private http: HttpClient) { }

  
  getWaveShares(): Observable<WaveShare[]> {
    // return of(WaveSharesDATA)
    return this.http.get<WaveShare[]>(`${this.apiUrl}`);
  }

  getWaveShareById(ctrPanelId: number): Observable<WaveShare[]> {
    const url = `${this.apiUrl}${ctrPanelId}`;
    return this.http.get<WaveShare[]>(url);
  }
  createWaveShare(ctrPanel: Partial<WaveShare>): Observable<WaveShare> {
    return this.http.post<WaveShare>(this.apiUrl, ctrPanel);
  }

  updateWaveShare(ctrPanelId: number, ctrPanel: Partial<WaveShare>): Observable<void> {
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

export const WaveSharesDATA: WaveShare[] = [{ 
  id: 1,
  ipAddress: '172.53.3.6',
  serialNumber: 'N552854AG654657',
  name: 'W Share 1',
  doorId:0 
},
{ 
  id: 2,
  ipAddress: '172.53.3.7',
  serialNumber: 'N552854AG654658',
  name: 'W Share 2',
  doorId:1 
},
{ 
  id: 3,
  ipAddress: '172.53.3.8',
  serialNumber: 'N552854AG654659',
  name: 'W Share 3',
  doorId:2
},
{ 
  id: 4,
  ipAddress: '172.53.3.9',
  serialNumber: 'N552854AG654660',
  name: 'W Share 4',
  doorId:3
}]