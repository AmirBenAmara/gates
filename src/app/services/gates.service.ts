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

  getDoors(): Observable<Gate[]> {
    console.log(this.http.get<Gate[]>(this.apiUrl))
    return this.http.get<Gate[]>(this.apiUrl);
  }

  getDoorById(doorId: string): Observable<Gate[]> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.get<Gate[]>(url);
  }
  createNewGate(newGate: NewGateRequest): Observable<NewGateRequest> {
    console.log(newGate)
    return this.http.post<NewGateRequest>(this.apiUrl, newGate);
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

export interface NewGateRequest {
  nameGate: string;
  departmentGate: string;
  waveShare: any;
  entryDevices: {
    camera: any;
    reader: any;
  };
  exitDevices: {
    camera: any;
    reader: any;
  };
}

export interface Gate {
  _id: string;
  nameGate: string;
  departmentGate: Department;
  waveShare: WaveShare;
  entryDevices: {
    camera: Camera;
    reader: Reader;
  };
  exitDevices: {
    camera: Camera;
    reader: Reader;
  };
  status: number; // 0 for offline, 1 for online
  details: string[]; // Array of issues or status details
}

