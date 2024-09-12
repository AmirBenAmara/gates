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
  guestForm: FormGroup 
  guests: Guest[] | undefined;
  selectedGuest: Guest | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;
  public viewModalDeleteVisible = false;
  editMode: boolean = false;
  guest: Guest = null;
  page1 = true;
  page2 = false;
  departments: Department[] | undefined;
  selectedDepartments = [];
  doors: Gate[] | undefined;
  selectedDoors = [];

  constructor(
    private guestService: GuestService,
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private doorService: GatesService,
    ) { }

  ngOnInit(): void {
    this.getGuests();
    this.getDepartments(); // Fetch departments
    this.getDoors(); // Fetch doors
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
    this.guestService.deleteGuest(this.selectedGuest._id).subscribe(res => {
      this.viewModalDeleteVisible = false;
      this.getGuests()
      this.cancel()
    });
  }

  getGuests() {
    this.guestService.getGuests().subscribe(Guests => {
      this.guests = Guests;
      // console.log(this.guests);
    });
  }

  // //TODO: finish implementation
  // updateGuest(Guest: any) {
  //   this.guestService.updateGuest(Guest).subscribe();
  // }

  updateGuest() {
    if (this.guestForm.valid) {
      const updatedGuest = { ...this.guestForm.value, _id: this.selectedGuest?._id, departments: this.selectedDepartments, doors: this.selectedDoors };
      this.guestService.updateGuest(updatedGuest).subscribe(() => {
        console.log(updatedGuest);
        this.getGuests();
        this.cancel();
      });
    }
  }

  //TODO: finish implementation
  newGuest(Guest: any) {
    this.guestService.createGuest(Guest).subscribe();
  }

  // createGuest() {
  //   if (this.guestForm.valid) {
  //     const newGuest = { ...this.guestForm.value, departments: this.selectedDepartments, doors: this.selectedDoors };
  //     this.guestService.createGuest(newGuest).subscribe(() => {
  //       this.getGuests();
  //       this.cancel();
  //     });
  //   }
  // }

  editGuest(guest: Guest) {
    this.selectedGuest = guest;
    this.guestForm.patchValue(guest);
    // this.selectedDepartments = guest.departments || [];
    // this.selectedDoors = guest.doors || [];
    this.visible = true;
    this.editMode = true;
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
        this.guestService.updateGuest(guest).subscribe((res) => {
          this.getGuests();
          this.editMode = false;
        });
      } else {
        delete guest['_id']
        console.log(guest)
        this.guestService.createGuest(guest).subscribe((res) => {
          this.getGuests();
        });
      }
      this.cancel()
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

  fetchGatesForDepartments() {
    const selectedDepartmentIds = this.selectedDepartments;
    this.departmentService.getGatesForDepartments(selectedDepartmentIds).subscribe((gates) => {
      this.doors = gates;
    });
  }

  selectDepartment(departmentId) {
    if (this.departmentExist(departmentId)) {
      this.selectedDepartments = this.selectedDepartments.filter(depId => depId !== departmentId);
    } else {
      this.selectedDepartments.push(departmentId);
    }
    // Fetch gates for selected departments
    this.fetchGatesForDepartments();
  }

}
