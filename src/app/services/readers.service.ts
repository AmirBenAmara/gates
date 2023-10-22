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
  getReaderById(readerId: string): Observable<Reader> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.get<Reader>(url);
  }

  // CreateReader function with an HTTP POST request
  createReader(reader: Partial<Reader>): Observable<void> {
    return this.http.post<void>(this.apiUrl, reader);
  }

  updateReader(readerId: string, reader: Partial<Reader>): Observable<void> {
    return this.http.put<void>(this.apiUrl, reader);
  }

  deleteReader(readerId: string): Observable<void> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.delete<void>(url);
  }
}

// Example Reader interface
export interface Reader {
  _id: string;
  ipAddress: string;
  serialNumber: string;
  nameReader: string;
}
export const ReadersDATA: Reader[] = [{ 
  _id: "1",
  nameReader: 'Reader 1',
  ipAddress: '172.53.3.6',
  serialNumber: 'N552854AG654657',
},
{ 
  _id: "2",
  ipAddress: '172.53.3.7',
  serialNumber: 'N552854AG654658',
  nameReader: 'Reader 2',
},
{ 
  _id: "3",
  ipAddress: '172.53.3.8',
  serialNumber: 'N552854AG654659',
  nameReader: 'Reader 3',
},
{ 
  _id: "4",
  ipAddress: '172.53.3.9',
  serialNumber: 'N552854AG654660',
  nameReader: 'Reader 4',
}]