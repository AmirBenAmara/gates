import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {
  apiUrl: string = 'ChangeWithApiUrL';

  constructor(private http: HttpClient) { }

  
  getDoors(): Observable<Door[]> {
    return this.http.get<Door[]>(`${this.apiUrl}`);
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
  departmentId?: number;
}