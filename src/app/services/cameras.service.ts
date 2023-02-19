import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {
  apiUrl: string = 'ChangeWithApiUrL';

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
    return this.http.get<Camera[]>(this.apiUrl);
  }
  // UpdateCamera function with an HTTP PUT request
  updateCamera(camera: Camera): Observable<Camera> {
    const url = `${this.apiUrl}/${camera.id}`;
    return this.http.put<Camera>(url, camera);
  }
  deleteCamera(cameraId: number): Observable<void> {
    const url = `${this.apiUrl}/${cameraId}`;
    return this.http.delete<void>(url);
  }
}

export interface Camera {
  id?: number;
  ipAddress?: string;
  serialNumber?: string;
  name?: string;
  doorId?: number;
}