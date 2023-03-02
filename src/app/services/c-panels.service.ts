import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CPanelsService {
  apiUrl: string = 'ChangeWithApiUrL';

  constructor(private http: HttpClient) { }

  
  getCtrPanels(): Observable<CtrPanel[]> {
    return of(CtrPanelsDATA)
    // return this.http.get<CtrPanel[]>(`${this.apiUrl}`);
  }

  getCtrPanelById(ctrPanelId: number): Observable<CtrPanel[]> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.get<CtrPanel[]>(url);
  }
  createCtrPanel(ctrPanel: CtrPanel): Observable<CtrPanel> {
    return this.http.post<CtrPanel>(this.apiUrl, ctrPanel);
  }

  updateCtrPanel(ctrPanelId: number, ctrPanel: CtrPanel): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.put<void>(url, ctrPanel);
  }
  
  deleteCtrPanel(ctrPanelId: number): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.delete<void>(url);
  }

  
}
export interface CtrPanel {
  id: number;
  ipAddress: string;
  serialNumber: string;
  name: string;
  doorId?: number;
}

export const CtrPanelsDATA: CtrPanel[] = [{ 
  id: 1,
  ipAddress: '172.53.3.6',
  serialNumber: 'N552854AG654657',
  name: 'C Panel 1',
  doorId:0 
},
{ 
  id: 2,
  ipAddress: '172.53.3.7',
  serialNumber: 'N552854AG654658',
  name: 'C Panel 2',
  doorId:1 
},
{ 
  id: 3,
  ipAddress: '172.53.3.8',
  serialNumber: 'N552854AG654659',
  name: 'C Panel 3',
  doorId:2
},
{ 
  id: 4,
  ipAddress: '172.53.3.9',
  serialNumber: 'N552854AG654660',
  name: 'C Panel 4',
  doorId:3
}]