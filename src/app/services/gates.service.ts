import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Reader, ReadersDATA } from './readers.service';
import { Camera, CamerasDATA } from './cameras.service';
import { WaveShare } from './wave-share.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from './departments.service';

@Injectable({
  providedIn: 'root'
})
export class GatesService {
  apiUrl: string = environment.apiUrl + 'gates';

  constructor(private http: HttpClient) { }

  
  // getDoors(): Observable<Door[]> {
  //   return this.http.get<Door[]>(`${this.apiUrl}`);
  // }
  getDoors(): Observable<Gate[]> {
    // return of (DoorsDATA);
    return this.http.get<Gate[]>(this.apiUrl);
  }

  getDoorById(doorId: string): Observable<Gate[]> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.get<Gate[]>(url);
  }
  createDoor(doors: Gate[]): Observable<Gate> {
    return this.http.post<Gate>(this.apiUrl, doors);
  }

  updateDoor(doorId: string, door: Gate): Observable<void> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.put<void>(url, door);
  }
  
  deleteDoor(doorId: string): Observable<void> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.delete<void>(url);
  }
}

export interface Gate {
  _id?: string;
  nameGate?: string;
  departmentGate?: Department;
  waveShare? : WaveShare;
  entryDevices : {
    camera? : Camera,
    reader? : Reader,
  }
  exitDevices : {
    camera? : Camera,
    reader? : Reader,
  }
 
}
