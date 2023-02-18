import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CPanelsService {
  apiUrl: string = 'ChangeWithApiUrL';

  constructor(private http: HttpClient) { }

  
  getCtrPanels(): Observable<CtrPanel[]> {
    return this.http.get<CtrPanel[]>(`${this.apiUrl}`);
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
  ctrPanelId: number;
}