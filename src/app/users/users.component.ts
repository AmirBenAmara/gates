import { Component } from '@angular/core';
import { cilPencil, cilTrash, cilPlus } from '@coreui/icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  icons = { cilPencil, cilTrash ,cilPlus};
  public visible = false;

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
