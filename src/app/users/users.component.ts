import { Component } from '@angular/core';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  icons = { cilPencil, cilTrash ,cilPlus ,cilInfo};
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
