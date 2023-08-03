import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  adminForm: FormGroup;
  private fb: FormBuilder;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public visibleAdmin = false;
  public viewModalDeleteVisible = false;
  
  constructor(
    private userservice: UsersService,
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.adminForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
 

  openUserModal() {
    this.visible = true;
  }
  openAdminModal() {
    this.visibleAdmin = true;
  }
  cancel() {
    this.visible = false;
    this.visibleAdmin = false;
  }

  handleUserModalVisbilityChange(event: any) {
    this.visible = event;
  }
  handleAdminModalVisbilityChange(event: any) {
    this.visibleAdmin = event;
  }

  submitUser(){
    this.userservice.createUser(this.userForm.value).subscribe(res => {
      this.cancel()
    })
  }
  submitAdmin(){
    this.userservice.createAdmin(this.adminForm.value).subscribe(res => {
      this.cancel()
    })
  }
}
