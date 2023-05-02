import { Component,OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-doors-status',
  templateUrl: './doors-status.component.html',
  styleUrls: ['./doors-status.component.scss']
})
export class DoorsStatusComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  doorStatuses:  any;

  ngOnInit(): void {
    this.socketService.getDoorStatus().subscribe((data) => {
      this.doorStatuses = data;
    });
  }
  
}
