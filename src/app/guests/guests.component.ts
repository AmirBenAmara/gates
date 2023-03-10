import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { GuestService, Guest } from '../services/guest.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  guestForm: FormGroup = this.fb.group({
    fatherName: ['', Validators.required],
    surname: ['', Validators.required],
    cin: ['', Validators.required],
    birthDate: [null, Validators.required],
    birthPlace: ['', Validators.required],
    motherName: ['', Validators.required],
    occupation: ['', Validators.required],
    actualAddress: ['', Validators.required],
    cinDeliverDate: ['', Validators.required],
  });
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;
  public viewModalDeleteVisible = false;
  editMode: boolean = false;

  guests: Guest[] | undefined;

  selectedGuest: Guest | undefined;

  constructor(private guestservice: GuestService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getGuests()
    this.guestForm = this.fb.group({
      id: [''],
      fatherName: ['', Validators.required],
      surname: ['', Validators.required],
      cin: ['', Validators.required],
      birthDate: [null, Validators.required],
      birthPlace: ['', Validators.required],
      motherName: ['', Validators.required],
      occupation: ['', Validators.required],
      actualAddress: ['', Validators.required],
      cinDeliverDate: ['', Validators.required],
    });
  }

  //TODO: finish implementation
  deleteGuest() {
    if(this.selectedGuest){
      this.guestservice.deleteGuest(this.selectedGuest.id? this.selectedGuest.id : 0).subscribe(res => {
        this.viewModalDeleteVisible = false; 
        this.getGuests()
      });
    }
  }
  //TODO: finish implementation
  getGuests() {
    this.guestservice.getGuests().subscribe(Guests => {
      this.guests = Guests;
    });
  }
  //TODO: finish implementation
  updateGuest(Guest: any) {
    // this.guestservice.updateGuest(Guest).subscribe();
  }

  //TODO: finish implementation
  newGuest(Guest: any) {
    // this.guestservice.createGuest(Guest).subscribe();
  }

  editGuest(guest: Guest | undefined) {
    if (guest) {
      this.editMode = true;
      this.selectedGuest = guest;
      this.guestForm.setValue(guest);
      this.visible = true;
    }
  }

  detailGuest(guest: Guest | undefined) {
    this.viewModalVisible = true;
    this.selectedGuest = guest;
  }

  openModalDelete(guest: Guest | undefined) {
    this.selectedGuest = guest;
    this.viewModalDeleteVisible = true;
  }
  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleGuestModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openGuestModal() {
    this.visible = true;
  }

  submitAddModal() {
    let guest: Guest;
    if (this.guestForm.valid) {
      // console.log(this.guestForm.value);
      guest = this.guestForm.value;
      // guest.birthDate = this.formatDate(this.guestForm.value.birthDate);
      // guest.cinDeliverDate = this.formatDate(
      //   this.guestForm.value.cinDeliverDate
      // );

      // console.log(guest);

      if (this.editMode) {
        this.guestservice.updateGuest(guest).subscribe((res) => {
          this.getGuests();
          this.editMode = false;
        });
      } else {
        delete guest['id']
        console.log(guest)
        this.guestservice.createGuest(guest).subscribe((res) => {
          this.getGuests();
        });
      }
      this.cancel()
    }
  }

  formatDate(date: string) {
    let dateArray = date.split('-');
    return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
  }
}
