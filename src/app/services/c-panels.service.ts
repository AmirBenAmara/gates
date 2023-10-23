import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CPanelsService {
  apiUrl: string = environment.apiUrl + 'controlPanels';

  constructor(private http: HttpClient) { }

  
  getCtrPanels(): Observable<CtrPanel[]> {
    // return of(CtrPanelsDATA)
    return this.http.get<CtrPanel[]>(`${this.apiUrl}`);
  }

  getCtrPanelById(ctrPanelId: string): Observable<CtrPanel[]> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.get<CtrPanel[]>(url);
  }
  createCtrPanel(ctrPanel: Partial<CtrPanel>): Observable<CtrPanel> {
    return this.http.post<CtrPanel>(this.apiUrl, ctrPanel);
  }

  updateCtrPanel(ctrPanelId: string, ctrPanel: Partial<CtrPanel>): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.put<void>(url, ctrPanel);
  }
  
  deleteCtrPanel(ctrPanelId: string): Observable<void> {
    const url = `${this.apiUrl}/${ctrPanelId}`;
    return this.http.delete<void>(url);
  }

  
}
export interface CtrPanel {
  _id: string;
  serialNumber: string,
  nameControlPanel: string;
}

export const CtrPanelsDATA: CtrPanel[] = [{ 
  _id: 'jfkbjfbjb',
  serialNumber: '172.53.3.6',
  nameControlPanel: 'C Panel 1'
},
{ 
  _id: 'kbvjbdkdfj',
  serialNumber: '172.53.3.7',
  nameControlPanel: 'C Panel 2'
},
{ 
  _id: 'hbfvjhbdbv',
  serialNumber: '172.53.3.8',
  nameControlPanel: 'C Panel 3'
},
{ 
  _id: 'bfhbjdbhdb',
  serialNumber: '172.53.3.9',
  nameControlPanel: 'C Panel 4'
}]