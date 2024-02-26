import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department } from './departments.service';
import { Gate } from './gates.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl: string = environment.apiUrl + 'profiles';

  constructor(private http: HttpClient) { }

  createProfile(profile: Profile): Observable<Profile> {
    const { _id, ...profileData } = profile;
    return this.http.post<Profile>(this.apiUrl, profileData);
  }

  // GetProfileById function with an HTTP GET request
  getProfileById(ProfileId: string): Observable<Profile> {
    const url = `${this.apiUrl}/${ProfileId}`;
    return this.http.get<Profile>(url);
  }
  
  // GetProfiles function with an HTTP GET request
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }
  // UpdateProfile function with an HTTP PUT request
  updateProfile(Profile: Profile): Observable<Profile> {
    const url = `${this.apiUrl}/${Profile._id}`;
    return this.http.put<Profile>(url, Profile);
  }
  deleteProfile(ProfileId: string): Observable<void> {
    const url = `${this.apiUrl}/${ProfileId}`;
    return this.http.delete<void>(url);
  }
}

export interface Profile {
  _id?: string;
  name?: string;
  surname?: string;
  documentNumber?: number;
  occupation?: string;
  cin?:number;
  address?:string;
  email?:string;
  telephoneNumber?:number;
  departments?:Department[];
  gates?:Gate[];
}
