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
  doorStatuses:  any;

  ngOnInit(): void {
    this.socketService.getDoorStatus().subscribe((data) => {
      this.doorStatuses = data;
    });
  }
  
}
