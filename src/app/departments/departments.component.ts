import { Component, OnInit } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilFullscreen } from '@coreui/icons';
import {
  DepartmentsService,
  Department,
} from '../services/departments.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  departmentForm = this.fb.group({
    name: ['', Validators.required],
  });
  departments: Department[] = [
    {
      id: 1,
      name: 'department1',
    },
    {
      id: 2,
      name: 'department2',
    },
  ];
  selectedDepartment: Department | undefined ;
  icons = { cilPencil, cilTrash, cilPlus, cilFullscreen };
  public visible = false;
  constructor(
    private departmentService: DepartmentsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  //TODO: finish implementation
  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id).subscribe();
  }
  //TODO: finish implementation
  getDepartments() {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }
  //TODO: finish implementation
  updateDepartment(id: number, department: Department) {
    this.departmentService.updateDepartment(id, department).subscribe();
  }

  //TODO: finish implementation
  newDepartment(department: Department) {
    this.departmentService.createDepartment(department).subscribe();
  }

  editDepartment(department: Department | undefined){
    this.selectedDepartment = department;
  }

  detailDepartment(department: Department | undefined) {
    this.selectedDepartment = department;
  }

  //TODO: finish implementation

  cancel() {
    this.visible = false;
  }
  //TODO: finish implementation

  handleDepartmentModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openDepartmentModal() {
    this.visible = true;
  }
}
