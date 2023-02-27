import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash , cilInfo } from '@coreui/icons';
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
  profiles: Profile[] = [
    {
      id: 0,
      name: "john",
      surname: "doe",
      birthDate: " 21/01/1989 ",
      documentNumber: 245345,
      sex: "Male",
      nationality: "France",
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
  selectedProfile : Profile | undefined;
  icons = { cilPencil, cilTrash ,cilPlus ,cilInfo};
  public visible = false;
  public viewModalVisible = false;
  
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

  editProfile(profile: Profile | undefined){
    this.selectedProfile = profile;
  }

  detailProfile(profile: Profile | undefined) {
    this.viewModalVisible = true
    this.selectedProfile = profile;
  }
  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false
  }
  //TODO: finish implementation

  handleProfileModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openProfileModal() {
    this.visible = true;
  }
  
}
