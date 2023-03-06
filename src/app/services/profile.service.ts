import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl: string = environment.apiUrl + 'Profile';

  constructor(private http: HttpClient) { }

  createProfile(Profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.apiUrl, Profile);
  }
  // GetProfileById function with an HTTP GET request
  getProfileById(ProfileId: number): Observable<Profile> {
    const url = `${this.apiUrl}/${ProfileId}`;
    return this.http.get<Profile>(url);
  }
  // GetProfiles function with an HTTP GET request
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }
  // UpdateProfile function with an HTTP PUT request
  updateProfile(Profile: Profile): Observable<Profile> {
    const url = `${this.apiUrl}/${Profile.id}`;
    return this.http.put<Profile>(url, Profile);
  }
  deleteProfile(ProfileId: number): Observable<void> {
    const url = `${this.apiUrl}/${ProfileId}`;
    return this.http.delete<void>(url);
  }
}

export interface Profile {
  id?: number;
  name?: string;
  surname?: string;
  birthDate?: string;
  documentNumber?: number;
  sex?: string;
  nationality?: string;
  expiryDate?:string;
  personalData?:string;
  mrZ1?:string;
  mrZ2?:string;
  mrZ3?:string;
  issueCountry?:string;
}
