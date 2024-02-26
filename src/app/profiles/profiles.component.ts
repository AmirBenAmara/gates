import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilInfo, cibLgtm } from '@coreui/icons';
import { Profile, ProfileService } from '../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, DepartmentsService } from '../services/departments.service';
import { Gate, GatesService } from '../services/gates.service';
import { SocketService } from '../services/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent {
  private socketSubscription: Subscription;
  profileForm: FormGroup 
  private socket: WebSocket;
  profiles: Profile[] | undefined;
  selectedProfile: Profile | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;
  public viewModalDeleteVisible = false;
  editMode: boolean = false;

  profile: Profile = null;
  page1 = true;
  page2 = false;
  departments: Department[] | undefined;
  selectedDepartments = [];
  doors: Gate[] | undefined;
  selectedDoors = [];
  

  constructor(
    private ProfileService: ProfileService,
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private doorService: GatesService,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.onProfileLoad();
    this.getProfiles()
    this.getDepartments(); // Fetch departments
    this.getDoors(); // Fetch doors
    this.profileForm = this.fb.group({
      name: ['', Validators .required],
      surname: ['', Validators.required],
      occupation: ['', Validators.required],
      cin: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      documentNumber: ['', Validators.required],
    });
  }

  onProfileLoad() {
    this.socket = this.socketService.loadProfile();
    this.socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });

    this.socket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
      this.editProfile(JSON.parse(event.data));
      this.profileForm.patchValue(JSON.parse(event.data))
      this.openProfileModal();
    })
      this.socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);
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
      this.viewModalDeleteVisible = false;
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
    this.profileForm.patchValue(profile);
    this.visible = true;
    this.editMode = true;

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
    let profile: Profile;
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      profile = this.profileForm.value;
      profile.departments = this.selectedDepartments;
      profile.gates = this.selectedDoors;

      console.log(profile);

      if (this.editMode) {
        this.ProfileService.updateProfile(profile).subscribe((res) => {
          this.getProfiles();
          this.editMode = false;
        });
      } else {
        delete profile['_id']
        console.log(profile)
        this.ProfileService.createProfile(profile).subscribe((res) => {
          this.getProfiles();
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

  initAddProfileForm() {
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
