
import { Component,OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { cilMediaPause, cilClearAll, cilX } from '@coreui/icons';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {
  constructor(private socketService: SocketService) {}
  icons = { cilMediaPause, cilClearAll, cilX };

  deviceStatuses:  any;
  private socket: WebSocket;


  ngOnInit(): void {
    this.onDeviceStatusesReady();
  }
  
  onDeviceStatusesReady() {
    this.socket = this.socketService.getRTLogs();
    this.socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    this.socket.addEventListener('message', (event) => {
      console.log('Device status message received:', event.data);
      this.deviceStatuses = JSON.parse(event.data)
    })
      this.socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
      });
    }
  
}
