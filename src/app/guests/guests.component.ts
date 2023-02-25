import { Component } from '@angular/core';
import { cilPencil, cilTrash, cilPlus, cilFullscreen } from '@coreui/icons';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent {
  icons = { cilPencil, cilTrash, cilPlus, cilFullscreen };
  public visible = false;

  //TODO: finish implementation
  deleteGuest(id: number) {
    // this.GuestService.deleteGuest(id).subscribe();
  }
  //TODO: finish implementation
  getGuests() {
    // this.GuestService.getGuests().subscribe(Guests => {
    //   this.Guests = Guests;
    // });
  }
  //TODO: finish implementation
  updateGuest(Guest: any) {
    // this.GuestService.updateGuest(Guest).subscribe();
  }

  //TODO: finish implementation
  newGuest(Guest: any) {
    // this.GuestService.createGuest(Guest).subscribe();
  }

  detailGuest() {}

  //TODO: finish implementation

  cancel() {
    this.visible = false;
  }
  //TODO: finish implementation

  handleGuestModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openGuestModal() {
    this.visible = true;
  }
}
