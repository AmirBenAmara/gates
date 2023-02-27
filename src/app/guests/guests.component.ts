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
    name: ['', Validators.required],
    surname: ['', Validators.required],
    birthDate: ['', Validators.required],
    documentNumber: [null, Validators.required],
    sex: ['', Validators.required],
    nationality: ['', Validators.required],
    expiryDate: ['', Validators.required],
    personalData: ['', Validators.required],
    MRZ1: ['', Validators.required],
    MRZ2: ['', Validators.required],
    MRZ3: ['', Validators.required],
    issueCountry: ['', Validators.required],
  });
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;

  guests: Guest[] = [
    {
      id: 0,
      name: "mlak",
      surname: "dhif",
      birthDate: " 21/01/1989 ",
      documentNumber: 245345,
      sex: "Male",
      nationality: "Tunisia",
      expiryDate: "21/01/2023",
      personalData: "string",
      mrZ1: "85376537453",
      mrZ2: "5346379634",
      mrZ3: "3897937983",
      issueCountry: "Tunisia"
    },
    {
      id: 0,
      name: "amir",
      surname: "ben amara",
      birthDate: " 07/01/1989 ",
      documentNumber: 245345,
      sex: "Male",
      nationality: "Tunisia",
      expiryDate: "21/01/2023",
      personalData: "string",
      mrZ1: "85376537453",
      mrZ2: "5346379634",
      mrZ3: "552378357",
      issueCountry: "France"
    }
    
  ];

  selectedGuest : Guest | undefined;

  constructor(private guestervice: GuestService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.guestForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: ['', Validators.required],
      documentNumber: [null, Validators.required],
      sex: ['', Validators.required],
      nationality: ['', Validators.required],
      expiryDate: ['', Validators.required],
      personalData: ['', Validators.required],
      MRZ1: ['', Validators.required],
      MRZ2: ['', Validators.required],
      MRZ3: ['', Validators.required],
      issueCountry: ['', Validators.required],
    });
  }

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

  editGuest(guest: Guest | undefined){
    this.selectedGuest = guest;
  }

  detailGuest(guest: Guest | undefined) {
    this.viewModalVisible = true
    this.selectedGuest = guest;
  }
  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false
  }
  //TODO: finish implementation

  handleGuestModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openGuestModal() {
    this.visible = true;
  }
}
