import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CtrPanel, CtrPanelsDATA } from './c-panels.service';
import { Reader, ReadersDATA } from './readers.service';
import { Camera, CamerasDATA } from './cameras.service';
import { WaveShare } from './wave-share.service';
import { cibLgtm } from '@coreui/icons';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  apiUrl: string = environment.apiUrl + 'departments';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}`);
  }

  getDepartmentById(departmentId: string): Observable<Department[]> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.get<Department[]>(url);
  }
  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(departmentId: string, department: string): Observable<void> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.put<void>(url, department);
  }

  deleteDepartment(departmentId: string): Observable<void> {
    const url = `${this.apiUrl}/${departmentId}`;
    return this.http.delete<void>(url);
  }

  getGatesForDepartments(departmentIds: string[]): Observable<Gate[]> {
      // Adjust the API endpoint based on your backend implementation
      const endpoint = `http://localhost:8000/api/gates/forDepartments`;

      // Make an HTTP request to fetch gates based on department IDs
      return this.http.post<Gate[]>(endpoint, { departmentIds });
  }
}

export interface Department {
  _id: string;
  nameDepartment: string;
  ctrDepartment: any;
}


export interface Gate {
  _id: string;
  nameGate: string;
  departmentGate: Department;
  waveShare: WaveShare;
  entryDevices: {
    camera: Camera;
    reader: Reader;
  };
  exitDevices: {
    camera: Camera;
    reader: Reader;
  };
}
