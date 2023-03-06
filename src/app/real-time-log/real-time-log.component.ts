import { Component } from '@angular/core';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';

@Component({
  selector: 'app-real-time-log',
  templateUrl: './real-time-log.component.html',
  styleUrls: ['./real-time-log.component.scss'],
})
export class RealTimeLogComponent {
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalDeleteVisible = false;

  openUserModal() {
    this.visible = true;
  }
  cancel() {
    this.visible = false;
  }

  handleUserModalVisbilityChange(event: any) {
    this.visible = event;
  }
}
