import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilInfo } from '@coreui/icons';
import { Profile, ProfileService } from '../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent {
  profileForm: FormGroup = this.fb.group({
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
  profiles: Profile[] | undefined;
  selectedProfile: Profile | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible = false;
  public viewModalDeleteVisible = false;

  constructor(
    private ProfileService: ProfileService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getProfiles()
    this.profileForm = this.fb.group({
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
  deleteProfile() {
    this.ProfileService.deleteProfile(this.selectedProfile.id).subscribe(res => {
      this.viewModalDeleteVisible ; 
      this.getProfiles()
    });
  }
  //TODO: finish implementation
  getProfiles() {
    this.ProfileService.getProfiles().subscribe((Profiles) => {
      this.profiles = Profiles;
    });
  }
  //TODO: finish implementation
  updateProfile(Profile: Profile) {
    this.ProfileService.updateProfile(Profile).subscribe();
  }

  //TODO: finish implementation
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
  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleProfileModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openProfileModal() {
    this.visible = true;
  }
}
