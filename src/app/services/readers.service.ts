import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReadersService {
  apiUrl: string = environment.apiUrl + 'Reader';

  constructor(private http: HttpClient) { }

  // GetReaders function with an HTTP GET request
  getReaders(): Observable<Reader[]> {
    // return of(ReadersDATA);
    return this.http.get<Reader[]>(this.apiUrl);
  }
  // GetReaderById function with an HTTP GET request
  getReaderById(readerId: number): Observable<Reader> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.get<Reader>(url);
  }

  // CreateReader function with an HTTP POST request
  createReader(reader: Partial<Reader>): Observable<void> {
    return this.http.post<void>(this.apiUrl, reader);
  }

  updateReader(readerId: number, reader: Partial<Reader>): Observable<void> {
    return this.http.put<void>(this.apiUrl, reader);
  }

  deleteReader(readerId: number): Observable<void> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.delete<void>(url);
  }
}

// Example Reader interface
export interface Reader {
  _id: number;
  ipAddress: string;
  serialNumber: string;
  name: string;
}
export const ReadersDATA: Reader[] = [{ 
  _id: 1,
  ipAddress: '172.53.3.6',
  serialNumber: 'N552854AG654657',
  name: 'Reader 1',
},
{ 
  _id: 2,
  ipAddress: '172.53.3.7',
  serialNumber: 'N552854AG654658',
  name: 'Reader 2',
},
{ 
  _id: 3,
  ipAddress: '172.53.3.8',
  serialNumber: 'N552854AG654659',
  name: 'Reader 3',
},
{ 
  _id: 4,
  ipAddress: '172.53.3.9',
  serialNumber: 'N552854AG654660',
  name: 'Reader 4',
}]