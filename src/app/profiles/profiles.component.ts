import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash , cilFullscreen } from '@coreui/icons';
import {Profile , ProfileService} from '../services/profile.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
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
  Profiles: Profile[] | undefined;
  icons = { cilPencil, cilTrash ,cilPlus ,cilFullscreen};
  public visible = false;
  constructor(private ProfileService: ProfileService, private fb: FormBuilder) { }
  ngOnInit(): void {
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
  deleteProfile(id: number) {
    this.ProfileService.deleteProfile(id).subscribe();
  }
  //TODO: finish implementation
  getProfiles() {
    this.ProfileService.getProfiles().subscribe(Profiles => {
      this.Profiles = Profiles;
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

  detailProfile(){
    
  }

  //TODO: finish implementation

  cancel() {
    this.visible = false;
  }
  //TODO: finish implementation

  handleProfileModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openProfileModal() {
    this.visible = true;
  }
  
}
