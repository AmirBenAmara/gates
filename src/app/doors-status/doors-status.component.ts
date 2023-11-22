import { Component,OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { cilMediaPause, cilClearAll, cilX } from '@coreui/icons';


@Component({
  selector: 'app-doors-status',
  templateUrl: './doors-status.component.html',
  styleUrls: ['./doors-status.component.scss']
})
export class DoorsStatusComponent implements OnInit {
  constructor(private socketService: SocketService) {}
  icons = { cilMediaPause, cilClearAll, cilX };
  doorStatuses:  any[];
  private socket: WebSocket;


  ngOnInit(): void {
    this.onDoorStatusesReady()
  }
  
  onDoorStatusesReady() {
    this.socket = this.socketService.getRTLogs();
    this.socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    this.socket.addEventListener('message', (event) => {
      console.log('Door status message received:', event.data);
      this.doorStatuses = JSON.parse(event.data)
    })
      this.socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
      });
    }
}
