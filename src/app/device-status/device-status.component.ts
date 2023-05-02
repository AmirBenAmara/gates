
import { Component,OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  deviceStatuses:  any;

  ngOnInit(): void {
    this.socketService.getDeviceStatus().subscribe((data) => {
      this.deviceStatuses = data;
    });
  }
  
}
