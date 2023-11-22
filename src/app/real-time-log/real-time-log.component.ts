import { Component, OnInit } from '@angular/core';
import { cilPencil, cilTrash, cilPlus, cilInfo, cilUser, cilClearAll, cilMediaPause, cilX } from '@coreui/icons';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-real-time-log',
  templateUrl: './real-time-log.component.html',
  styleUrls: ['./real-time-log.component.scss'],
})
export class RealTimeLogComponent implements OnInit{
  constructor(private socketService: SocketService) {}
  selectedProfile: any = null;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo, cilUser, cilMediaPause, cilClearAll, cilX };
  private socket: WebSocket;

  public visible = false;
  public viewModalDeleteVisible = false;
  public viewProfileModelVisible = false;
  logs: any;

  ngOnInit(): void {
    this.onRTLogsLoad()
  }
  
  onRTLogsLoad() {
    this.socket = this.socketService.getRTLogs();
    this.socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    this.socket.addEventListener('message', (event) => {
      console.log('Realtime Logs message received:', event.data);
      this.logs = JSON.parse(event.data)
    })
      this.socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
      });
    }
  openUserModal() {
    this.visible = true;
  }
  cancel() {
    this.visible = false;
    this.viewProfileModelVisible = false;
  }
  viewProfile(profile:any){
    this.selectedProfile = profile;
    this.viewProfileModelVisible = true;
  }

  handleUserModalVisbilityChange(event: any) {
    this.visible = event;
  }
}
