import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReadersService {
  apiUrl: string = environment.apiUrl + 'readers';

  constructor(private http: HttpClient) { }

  // GetReaders function with an HTTP GET request
  getReaders(): Observable<Reader[]> {
    // return of(ReadersDATA);
    return this.http.get<Reader[]>(this.apiUrl);
  }
  // GetReaderById function with an HTTP GET request
  getReaderById(readerId: string): Observable<Reader> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.get<Reader>(url);
  }

  // CreateReader function with an HTTP POST request
  createReader(reader: Partial<Reader>): Observable<void> {
    return this.http.post<void>(this.apiUrl, reader);
  }

  updateReader(readerId: string, reader: Partial<Reader>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${readerId}`, reader);
  }

  deleteReader(readerId: string): Observable<void> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.delete<void>(url);
  }
}

// Example Reader interface
export interface Reader {
  _id: string;
  
  serialNumber: string;
  
}
export const ReadersDATA: Reader[] = [{ 
  _id: "1",
  serialNumber: ''
},
{ 
  _id: "2",
  serialNumber: 'N552854AG654658',
},
{ 
  _id: "3",
  serialNumber: 'N552854AG654659',
},
{ 
  _id: "4",
  serialNumber: 'N552854AG654660',
}]