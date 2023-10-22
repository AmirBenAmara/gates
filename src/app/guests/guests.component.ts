import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { GuestService, Guest } from '../services/guest.service';
import { Department, DepartmentsService } from '../services/departments.service';
import { Gate, GatesService } from '../services/gates.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  guestForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    cin: ['', Validators.required],
    telephoneNumber: ['', Validators.required],
  });
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;
  public viewModalDeleteVisible = false;
  editMode: boolean = false;

  guests: Guest[] | undefined;

  selectedGuest: Guest | undefined;

  page1 = true;
  page2 = false;
  departments: Department[] | undefined;
  selectedDepartments = [];
  doors: Gate[] | undefined;
  selectedDoors = [];


  constructor(
    private guestservice: GuestService,
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private doorService: GatesService,

    ) { }

  ngOnInit(): void {
    this.getGuests()
    this.guestForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      cin: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  getDoors() {
    this.doorService.getDoors().subscribe((Doors) => {
      this.doors = Doors;
    });
  }

  deleteGuest() {
    if (this.selectedGuest) {
      this.guestservice.deleteGuest(this.selectedGuest._id ? this.selectedGuest._id : "0").subscribe(res => {
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
    this.initAddGuestForm();
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
      console.log(this.guestForm.value);
      guest = this.guestForm.value;
      guest.departments = this.selectedDepartments;
      guest.gates = this.selectedDoors;

      console.log(guest);

      if (this.editMode) {
        this.guestservice.updateGuest(guest).subscribe((res) => {
          this.getGuests();
          this.editMode = false;
        });
      } else {
        delete guest['_id']
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

  selectDepartment(departmentId) {
    if (this.departmentExist(departmentId)) {
      this.selectedDepartments = this.selectedDepartments.filter(depId => depId !== departmentId)
    } else {
      this.selectedDepartments.push(departmentId);
    }
  }

  selectAllDepartments() {
    this.selectedDepartments = this.departments.map(dep => dep._id);
    console.log("selectedDepartments", this.selectedDepartments)
  }

  departmentExist(departmentId) {
    return this.selectedDepartments.includes(departmentId);
  }

  selectDoor(doorId) {
    if (this.doorExist(doorId)) {
      this.selectedDoors = this.selectedDoors.filter(doId => doId !== doorId)
    } else {
      this.selectedDoors.push(doorId);
    }
  }

  selectAllDoors() {
    this.selectedDoors = this.doors.map(door => door._id);
  }

  doorExist(doorId) {
    return this.selectedDoors.includes(doorId);
  }

  initAddGuestForm() {
    this.page1 = true;
    this.page2 = false;
    this.selectedDepartments = [];
    this.selectedDoors = [];
  }

}
