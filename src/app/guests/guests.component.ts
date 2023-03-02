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

  guests: Guest[] = [
    {
      id: 0,
      fatherName: 'rjab',
      surname: 'ahmed',
      cin: 464511651,
      birthDate: '01/01/1999',
      birthPlace: 'Tunisia',
      motherName: 'jhbjhbj;',
      occupation: 'CTO',
      actualAddress: 'Tunis,',
      cinDeliverDate: '01/01/2020',
    },
    {
      id: 0,
      fatherName: 'rjab',
      surname: 'ahmed',
      cin: 464511651,
      birthDate: '01/01/1999',
      birthPlace: 'Tunisia',
      motherName: 'jhbjhbj;',
      occupation: 'CTO',
      actualAddress: 'Tunis,',
      cinDeliverDate: '01/01/2020',
    },
    {
      id: 0,
      fatherName: 'rjab',
      surname: 'ahmed',
      cin: 464511651,
      birthDate: '01/01/1999',
      birthPlace: 'Tunisia',
      motherName: 'jhbjhbj;',
      occupation: 'CTO',
      actualAddress: 'Tunis,',
      cinDeliverDate: '01/01/2020',
    },
  ];

  selectedGuest: Guest | undefined;

  constructor(private guestervice: GuestService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.guestForm = this.fb.group({
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

  editGuest(guest: Guest | undefined) {
    this.selectedGuest = guest;
  }

  detailGuest(guest: Guest | undefined) {
    this.viewModalVisible = true;
    this.selectedGuest = guest;
  }

  openModalDelete(guest: Guest | undefined){
    this.selectedGuest = guest
    this.viewModalDeleteVisible = true
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
}
