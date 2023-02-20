import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import {Profile , ProfileService} from '../services/profile.service'

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  Profiles: Profile[] | undefined;
  icons = { cilPencil, cilTrash ,cilPlus};
  public visible = false;
  constructor(private ProfileService: ProfileService) { }
  ngOnInit(): void {
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
