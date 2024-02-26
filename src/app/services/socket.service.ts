import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: WebSocket;


  private port : number = 8000;
  private doorStatusSocket$: WebSocket;
  private rtLogsSocket$:  WebSocket;
  private deviceStatusSocket$:  WebSocket;
  private wsEnrollementSocket$: WebSocketSubject<ProfilePayload>;
  readonly wsEndpointDS: string = `ws://localhost:${this.port}/accessControl`;
  readonly wsEndpointRTL: string = `ws://localhost:${this.port}/accessControl`;
  readonly wsEndpointDVS: string = `ws://localhost:${this.port}/deviceStatus2`;
  readonly wsEnrollement: string = `ws://localhost:${this.port}/wsEnrollement`;

  constructor() { 
    this.doorStatusSocket$ = new WebSocket(this.wsEndpointDS);
    this.rtLogsSocket$ = new WebSocket(this.wsEndpointRTL);
    this.deviceStatusSocket$ = new WebSocket(this.wsEndpointDVS);
    // this.wsEnrollementSocket$ = webSocket(this.wsEndpointDVS);
    this.socket = new WebSocket(this.wsEnrollement);
    
  }
  public getDoorStatus() {
    return this.doorStatusSocket$;
  }
  public getRTLogs() {
    return this.rtLogsSocket$
  }
  public getDeviceStatus() {
    return this.deviceStatusSocket$
  }

  public loadProfile() {
    return this.socket
  }

}


// interface DoorStatusPayload {
//   doorName: string;
//   doorStatus: string;
//   doorStatusType: string;
//   doorRelay: string;
//   Alarm: string;
//   lastEvent: string;
// }

interface DoorStatusPayload {
  gateName: String,
  status: String,
  date: String,
  lastEvent: String
}

interface ProfilePayload { 
  name: string,
  surname: string,
  documentNumber: number 
 }
  
interface DeviceStatusPayload {
  deviceName: string;
  deviceStatus: string;
  Alarm: string;
  lastEvent: string;
}


interface LogPayload {
  date: String,
  name: String,
  gate: String,
  department: String,
  event: String
  };


