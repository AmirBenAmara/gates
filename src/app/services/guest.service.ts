import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department } from './departments.service';
import { Door } from './doors.service';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  apiUrl: string = environment.apiUrl + 'Guest';

  constructor(private http: HttpClient) {}

  createGuest(Guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, Guest);
  }
  // GetGuestById function with an HTTP GET request
  getGuestById(GuestId: number): Observable<Guest> {
    const url = `${this.apiUrl}/${GuestId}`;
    return this.http.get<Guest>(url);
  }
  // GetGuests function with an HTTP GET request
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }
  // UpdateGuest function with an HTTP PUT request
  updateGuest(Guest: Guest): Observable<Guest> {
    const url = `${this.apiUrl}/${Guest._id}`;
    return this.http.put<Guest>(url, Guest);
  }
  deleteGuest(GuestId: number): Observable<void> {
    const url = `${this.apiUrl}/${GuestId}`;
    return this.http.delete<void>(url);
  }
}

export interface Guest {
  _id?: number;
  name?: string;
  surname?: string;
  cin?: string;
  reason?: string;
  telephoneNumber?: string;
  departments?:[Department];
  doors?:[Door];
}
