import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
  serialNumber: string;
  status: string
}

export const WaveSharesDATA: WaveShare[] = [{ 
  _id: "1",
  serialNumber: 'N552854AG654657',
  status: '0'
},
{ 
  _id: "2",
  serialNumber: 'N552854AG654658',
  status: '0'

},
{ 
  _id: "3",
  serialNumber: 'N552854AG654659',
  status: '0'
},
{ 
  _id: "4",
  serialNumber: 'N552854AG654660',
  status: '0'
}]