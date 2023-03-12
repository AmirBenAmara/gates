import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = environment.apiUrl + 'User';

  constructor(private http: HttpClient) { }

  register(registerDTO: any) {
    return this.http.post<void>(this.apiUrl + '/register', registerDTO);
  }
  login(loginDTO: any) {
    return this.http.post<void>(this.apiUrl + '/login', loginDTO);
  }

}
