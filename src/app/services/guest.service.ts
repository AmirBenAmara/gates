import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department } from './departments.service';
import { Gate } from './gates.service';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  apiUrl: string = environment.apiUrl + 'guests';

  constructor(private http: HttpClient) {}

  createGuest(guest: Guest): Observable<Guest> {
    const { _id, ...guestData } = guest;
    return this.http.post<Guest>(this.apiUrl, guestData);
  }
  // GetGuestById function with an HTTP GET request
  getGuestById(GuestId: string): Observable<Guest> {
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
  // Delete guest function with HTTP Delete request
  deleteGuest(GuestId: string): Observable<void> {
    const url = `${this.apiUrl}/${GuestId}`;
    return this.http.delete<void>(url);
  }
}

export interface Guest {
  _id?: string;
  name?: string;
  surname?: string;
  cin?: string;
  reason?: string;
  telephoneNumber?: string;
  departments?:any[];
  gates?:any[];
}
