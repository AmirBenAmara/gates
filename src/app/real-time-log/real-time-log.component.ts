import { Component, OnInit } from '@angular/core';
import { cilPencil, cilTrash, cilPlus, cilInfo, cilUser } from '@coreui/icons';
import { SocketService } from '../services/socket.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-real-time-log',
  templateUrl: './real-time-log.component.html',
  styleUrls: ['./real-time-log.component.scss'],
})
export class RealTimeLogComponent implements OnInit{
  constructor(private socketService: SocketService) {}
  selectedProfile: any = null;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo, cilUser };
  public visible = false;
  public viewModalDeleteVisible = false;
  public viewProfileModelVisible = false;
  logs: any;

  ngOnInit(): void {
    this.socketService.getRTLogs().subscribe((data) => {
      this.logs = data;
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
