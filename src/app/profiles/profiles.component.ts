import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilInfo } from '@coreui/icons';
import { Profile, ProfileService } from '../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, DepartmentsService } from '../services/departments.service';
import { Door, DoorsService } from '../services/doors.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent {
  profileForm: FormGroup 

  profiles: Profile[] | undefined;
  selectedProfile: Profile | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;
  public viewModalDeleteVisible = false;
  editMode: boolean = false;


  page1 = true;
  page2 = false;
  departments: Department[] | undefined;
  selectedDepartments = [];
  doors: Door[] | undefined;
  selectedDoors = [];

  constructor(
    private ProfileService: ProfileService,
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private doorService: DoorsService,
  ) { }
  ngOnInit(): void {
    this.getProfiles()
    this.profileForm = this.fb.group({
      name: ['', Validators .required],
      surname: ['', Validators.required],
      occupation: ['', Validators.required],
      cin: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
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

  deleteProfile() {
    this.ProfileService.deleteProfile(this.selectedProfile._id).subscribe(res => {
      this.viewModalDeleteVisible;
      this.getProfiles()
      this.cancel()
    });
  }

  getProfiles() {
    this.ProfileService.getProfiles().subscribe((Profiles) => {
      this.profiles = Profiles;
    });
  }
  updateProfile(Profile: Profile) {
    this.ProfileService.updateProfile(Profile).subscribe();
  }

  newProfile(Profile: Profile) {
    this.ProfileService.createProfile(Profile).subscribe();
  }

  editProfile(profile: Profile | undefined) {
    this.selectedProfile = profile;
  }

  detailProfile(profile: Profile | undefined) {
    this.viewModalVisible = true;
    this.selectedProfile = profile;
  }

  openModalDelete(profile: Profile | undefined) {
    this.selectedProfile = profile;
    this.viewModalDeleteVisible = true;
  }

  cancel() {
    this.visible = false;
    this.viewModalVisible = false;
    this.initAddProfileForm()
  }

  handleProfileModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openProfileModal() {
    this.visible = true;
  }

  submitAddModal() {
    let guest: Profile;
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      guest = this.profileForm.value;
      guest.departments = this.selectedDepartments;
      guest.doors = this.selectedDoors;
      // guest.birthDate = this.formatDate(this.guestForm.value.birthDate);
      // guest.cinDeliverDate = this.formatDate(
      //   this.guestForm.value.cinDeliverDate
      // );

      console.log(guest);

      // if (this.editMode) {
      //   this.ProfileService.updateProfile(guest).subscribe((res) => {
      //     this.getProfiles();
      //     this.editMode = false;
      //   });
      // } else {
      //   delete guest['id']
      //   console.log(guest)
      //   this.ProfileService.createProfile(guest).subscribe((res) => {
      //     this.getProfiles();
      //   });
      // }
      // this.cancel()
    }
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

  initAddProfileForm() {
    this.page1 = true;
    this.page2 = false;
    this.selectedDepartments = [];
    this.selectedDoors = [];
  }
}
