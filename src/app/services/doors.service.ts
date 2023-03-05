import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Reader, ReadersDATA } from './readers.service';
import { Camera, CamerasDATA } from './cameras.service';
import { WaveShare } from './wave-share.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {
  apiUrl: string = 'ChangeWithApiUrL';

  constructor(private http: HttpClient) { }

  
  // getDoors(): Observable<Door[]> {
  //   return this.http.get<Door[]>(`${this.apiUrl}`);
  // }
  getDoors(): Observable<Door[]> {
    return of (DoorsDATA);
    // return this.http.get<Reader[]>(this.apiUrl);
  }

  getDoorById(doorId: number): Observable<Door[]> {
    const url = `${this.apiUrl}/${doorId}`;
    return this.http.get<Door[]>(url);
  }
  createDoor(door: Door): Observable<Door> {
    return this.http.post<Door>(this.apiUrl, door);
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
  departmentId?: number;
  readers : Reader[],
  cameras : Camera[],
  waveShare : WaveShare,
}

export const DoorsDATA: Door[] = [
  {
    id: 0,
    name: 'door1',
    description: 'door1description',
    departmentId: 0,
    readers: ReadersDATA,
    cameras: CamerasDATA,
    waveShare: { 
      id: 1,
      ipAddress: '172.53.3.6',
      serialNumber: 'N552854AG654657',
      name: 'W Share 1',
      doorId:0 
    },
  },
]