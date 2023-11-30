import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaveShareService {
  apiUrl: string = environment.apiUrl + 'waveShares';

  constructor(private http: HttpClient) { }

  
  getWaveShares(): Observable<WaveShare[]> {
    // return of(WaveSharesDATA)
    return this.http.get<WaveShare[]>(`${this.apiUrl}`);
  }

  getWaveShareById(ctrPanelId: string): Observable<WaveShare[]> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.get<WaveShare[]>(url);
  }
  createWaveShare(ctrPanel: Partial<WaveShare>): Observable<WaveShare> {
    return this.http.post<WaveShare>(this.apiUrl, ctrPanel);
  }

  updateWaveShare(ctrPanelId: string, ctrPanel: Partial<WaveShare>): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.put<void>(url, ctrPanel);
  }
  
  deleteWaveShare(ctrPanelId: string): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.delete<void>(url);
  }

  
}
export interface WaveShare {
  _id: string;
  nameWaveShare: string;
  ipAddress: string;
  serialNumber: string;
}

export const WaveSharesDATA: WaveShare[] = [{ 
  _id: "1",
  ipAddress: '172.53.3.6',
  serialNumber: 'N552854AG654657',
  nameWaveShare: 'W Share 1',
},
{ 
  _id: "2",
  ipAddress: '172.53.3.7',
  serialNumber: 'N552854AG654658',
  nameWaveShare: 'W Share 2', 
},
{ 
  _id: "3",
  ipAddress: '172.53.3.8',
  serialNumber: 'N552854AG654659',
  nameWaveShare: 'W Share 3',
},
{ 
  _id: "4",
  ipAddress: '172.53.3.9',
  serialNumber: 'N552854AG654660',
  nameWaveShare: 'W Share 4',
}]