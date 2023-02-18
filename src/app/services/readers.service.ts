import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadersService {
  apiUrl: string = 'ChangeWithApiUrL';

  constructor(private http: HttpClient) { }

  // GetReaders function with an HTTP GET request
  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.apiUrl);
  }
  // GetReaderById function with an HTTP GET request
  getReaderById(readerId: number): Observable<Reader> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.get<Reader>(url);
  }

  // CreateReader function with an HTTP POST request
  createReader(reader: Reader): Observable<void> {
    return this.http.post<void>(this.apiUrl, reader);
  }

  updateReader(readerId: number, reader: Reader): Observable<void> {
    return this.http.put<void>(this.apiUrl, reader);
  }

  deleteReader(readerId: number): Observable<void> {
    const url = `${this.apiUrl}/${readerId}`;
    return this.http.delete<void>(url);
  }
}

// Example Reader interface
export interface Reader {
  id: number;
  ipAddress: string;
  serialNumber: string;
  name: string;
  doorId: number;
}