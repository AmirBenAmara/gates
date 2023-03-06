import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  apiUrl: string = environment.apiUrl + 'Department';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    // return this.http.get<Department[]>(`${this.apiUrl}`);
    return of(DepartmentsDATA);
  }

  getDepartmentById(departmentId: number): Observable<Department[]> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.get<Department[]>(url);
  }
  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(
    departmentId: number,
    department: Department
  ): Observable<void> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.put<void>(url, department);
  }

  deleteDepartment(departmentId: number): Observable<void> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.delete<void>(url);
  }
}

export interface Department {
  id: number;
  name: string;
}

export const DepartmentsDATA: Department[] = [
  {
    id: 1,
    name: 'department 1',
  },
  {
    id: 2,
    name: 'department 2',
  },
  {
    id: 3,
    name: 'department 3',
  },
  {
    id: 4,
    name: 'department 4',
  },
];
