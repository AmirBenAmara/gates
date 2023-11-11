import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: WebSocket;
  private port : number = 8080;
  private doorStatusSocket$: WebSocketSubject<DoorStatusPayload>;
  private rtLogsSocket$: WebSocketSubject<LogPayload>;
  private deviceStatusSocket$: WebSocketSubject<DeviceStatusPayload>;
  private wsEnrollementSocket$: WebSocketSubject<ProfilePayload>;
  readonly wsEndpointDS: string = `ws://localhost:${this.port}/doorStatus`;
  readonly wsEndpointRTL: string = `ws://localhost:${this.port}/RTLog`;
  readonly wsEndpointDVS: string = `ws://localhost:${this.port}/deviceStatus`;
  readonly wsEnrollement: string = `ws://localhost:${this.port}/wsEnrollement`;

  constructor() { 
    this.doorStatusSocket$ = new WebSocketSubject(this.wsEndpointDS);
    this.rtLogsSocket$ = new WebSocketSubject(this.wsEndpointRTL);
    this.deviceStatusSocket$ = new WebSocketSubject(this.wsEndpointDVS);
    // this.wsEnrollementSocket$ = webSocket(this.wsEndpointDVS);
    this.socket =new WebSocket(this.wsEnrollement);
  }
  public getDoorStatus() {
    return this.doorStatusSocket$.asObservable();
  }
  public getRTLogs() {
    return this.rtLogsSocket$.asObservable();
  }
  public getDeviceStatus() {
    return this.deviceStatusSocket$.asObservable();
  }

  public loadProfile() {
    return this.socket
  }

}


interface DoorStatusPayload {
  doorName: string;
  doorStatus: string;
  doorStatusType: string;
  doorRelay: string;
  Alarm: string;
  lastEvent: string;
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
  Date: string;
  Name: string;
  Door: string;
  Department: string;
  Event: string;
  Profile: {
    id: number;
    name: string;
    surname: string;
    birthDate: string;
    documentNumber: string;
    sex: string;
    nationality: string;
    expiryDate: string;
    personalData: string;
    mrZ1: string;
    mrZ2: string;
    mrZ3: string;
    issueCountry: string;
  };
}

