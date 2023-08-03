import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = environment.apiUrl + 'authenticate/';

  constructor(private http: HttpClient) { }

  register(registerDTO: any) {
    return this.http.post<void>(this.apiUrl + '/register', registerDTO);
  }
  login(loginDTO: any) {
    return this.http.post<void>(this.apiUrl + '/login', loginDTO);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
    // return of(DepartmentsDATA);
  }

  getUserById(userId: number): Observable<User[]> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User[]>(url);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'addUser', user);
  }
  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl+ 'addAdmin', admin);
  }

  updateUser(
    userId: number,
    user: User
  ): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<void>(url, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
}

export interface User {
  name: string;
  email: String;
  password: String;
}
export interface Admin {
  name: string;
  email: String;
  password: String;
}