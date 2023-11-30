import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CtrPanel, CtrPanelsDATA } from './c-panels.service';
import { Gate } from './gates.service';
import { cibLgtm } from '@coreui/icons';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  apiUrl: string = environment.apiUrl + 'departments';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}`);
    // return of(DepartmentsDATA);
  }

  getDepartmentById(departmentId: string): Observable<Department[]> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.get<Department[]>(url);
  }
  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(
    departmentId: string,
    department: Department
  ): Observable<void> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.put<void>(url, department);
  }

  deleteDepartment(departmentId: string): Observable<void> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.delete<void>(url);
  }
}

export interface Department {
  _id: string;
  nameDepartment: string;
  gates: any[];
  ctrDepartment: any;
}
