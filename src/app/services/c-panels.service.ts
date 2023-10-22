import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CPanelsService {
  apiUrl: string = environment.apiUrl + 'CtrPannel';

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
  nameControlPanel: string;
  serialNumber: string;
}

export const CtrPanelsDATA: CtrPanel[] = [{ 
  _id: "1",
  serialNumber: 'N552854AG654657',
  nameControlPanel: 'C Panel 1',
},
{ 
  _id: "2",
  serialNumber: 'N552854AG654658',
  nameControlPanel: 'C Panel 2',
},
{ 
  _id: "3",
  serialNumber: 'N552854AG654659',
  nameControlPanel: 'C Panel 3',
},
{ 
  _id: "4",
  serialNumber: 'N552854AG654660',
  nameControlPanel: 'C Panel 4',
}]