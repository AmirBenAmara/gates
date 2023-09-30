import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {
  apiUrl: string = environment.apiUrl + 'Camera';

  constructor(private http: HttpClient) { }

  createCamera(camera: Camera): Observable<Camera> {
    return this.http.post<Camera>(this.apiUrl, camera);
  }
  // GetCameraById function with an HTTP GET request
  getCameraById(cameraId: number): Observable<Camera> {
    const url = `${this.apiUrl}/${cameraId}`;
    return this.http.get<Camera>(url);
  }
  // GetCameras function with an HTTP GET request
  getCameras(): Observable<Camera[]> {
    // remove this line and uncomment the 2nd line when implementing with real api
    // return of(CamerasDATA);
    return this.http.get<Camera[]>(this.apiUrl);
  }
  // UpdateCamera function with an HTTP PUT request
  updateCamera(camera: Partial<Camera>): Observable<Camera> {
    const url = `${this.apiUrl}/${camera._id}`;
    return this.http.put<Camera>(url, camera);
  }
  deleteCamera(cameraId: number): Observable<void> {
    const url = `${this.apiUrl}/${cameraId}`;
    return this.http.delete<void>(url);
  }
}

export interface Camera {
  _id?: number;
  ipAddress?: string;
  serialNumber?: string;
  name?: string;
}

export const CamerasDATA: Camera[] = [{ 
  _id: 1,
  ipAddress: '172.53.3.6',
  serialNumber: 'N552854AG654657',
  name: 'Camera 1',
},
{ 
  _id: 2,
  ipAddress: '172.53.3.7',
  serialNumber: 'N552854AG654658',
  name: 'Camera 2',
},
{ 
  _id: 3,
  ipAddress: '172.53.3.8',
  serialNumber: 'N552854AG654659',
  name: 'Camera 3',
},
{ 
  _id: 4,
  ipAddress: '172.53.3.9',
  serialNumber: 'N552854AG654660',
  name: 'Camera 4',
}]