import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {
  apiUrl: string = environment.apiUrl + 'cameras';

  constructor(private http: HttpClient) { }

  createCamera(camera: Camera): Observable<Camera> {
    return this.http.post<Camera>(this.apiUrl, camera);
  }
  // GetCameraById function with an HTTP GET request
  getCameraById(cameraId: string): Observable<Camera> {
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
  updateCamera(cameraId: string, camera: Partial<Camera>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${cameraId}`, camera);
  }
  deleteCamera(cameraId: string): Observable<void> {
    const url = `${this.apiUrl}/${cameraId}`;
    return this.http.delete<void>(url);
  }
}

export interface Camera {
  _id?: string;
  serialNumber?: string;
}

export const CamerasDATA: Camera[] = [{ 
  _id: "1",
  serialNumber: 'N552854AG654657',
},
{ 
  _id: "2",
  serialNumber: 'N552854AG654658',
},
{ 
  _id: "3",
  serialNumber: 'N552854AG654659',
},
{ 
  _id: "4",
  serialNumber: 'N552854AG654660',
}]