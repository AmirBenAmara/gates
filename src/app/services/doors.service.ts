import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Reader, ReadersDATA } from './readers.service';
import { Camera, CamerasDATA } from './cameras.service';
import { WaveShare } from './wave-share.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, DepartmentsDATA } from './departments.service';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {
  apiUrl: string = environment.apiUrl + 'Door';

  constructor(private http: HttpClient) { }

  
  // getDoors(): Observable<Door[]> {
  //   return this.http.get<Door[]>(`${this.apiUrl}`);
  // }
  getDoors(): Observable<Door[]> {
    // return of (DoorsDATA);
    return this.http.get<Door[]>(this.apiUrl);
  }

  getDoorById(doorId: number): Observable<Door[]> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.get<Door[]>(url);
  }
  createDoor(doors: Door[]): Observable<Door> {
    return this.http.post<Door>(this.apiUrl, doors);
  }

  updateDoor(doorId: number, door: Door): Observable<void> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.put<void>(url, door);
  }
  
  deleteDoor(doorId: number): Observable<void> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.delete<void>(url);
  }
}

export interface Door {
  id: number;
  name: string;
  description : string;
  department?: Department;
  reader : Reader,
  camera : Camera,
  waveShare : WaveShare,
}

export const DoorsDATA: Door[] = [
  {
    id: 0,
    name: 'door1',
    description: 'door1description',
    department: DepartmentsDATA[0],
    reader: ReadersDATA[0],
    camera: CamerasDATA[0],
    waveShare: { 
      id: 1,
      ipAddress: '172.53.3.6',
      serialNumber: 'N552854AG654657',
      name: 'W Share 1',
      doorId:0 
    },
  },
]