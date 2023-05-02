import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private port : number = 8080;
  private doorStatusSocket$: WebSocketSubject<DoorStatusPayload>;
  private rtLogsSocket$: WebSocketSubject<LogPayload>;
  private deviceStatusSocket$: WebSocketSubject<DeviceStatusPayload>;
  readonly wsEndpointDS: string = `ws://localhost:${this.port}/doorStatus`;
  readonly wsEndpointRTL: string = `ws://localhost:${this.port}/RTLog`;
  readonly wsEndpointDVS: string = `ws://localhost:${this.port}/deviceStatus`;
  constructor() { 
    this.doorStatusSocket$ = new WebSocketSubject(this.wsEndpointDS);
    this.rtLogsSocket$ = new WebSocketSubject(this.wsEndpointRTL);
    this.deviceStatusSocket$ = new WebSocketSubject(this.wsEndpointDVS);

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

}


interface DoorStatusPayload {
  doorName: string;
  doorStatus: string;
  doorStatusType: string;
  doorRelay: string;
  Alarm: string;
  lastEvent: string;
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

