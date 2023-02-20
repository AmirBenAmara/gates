import { Component, OnInit } from '@angular/core';
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import { DepartmentsService, Department } from '../services/departments.service'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] | undefined;
  icons = { cilPencil, cilTrash ,cilPlus};
  public visible = false;
  constructor(private departmentService: DepartmentsService) { }
  
  ngOnInit(): void {
  }


  //TODO: finish implementation
  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id).subscribe();
  }
  //TODO: finish implementation
  getDepartments() {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }
  //TODO: finish implementation
  updateDepartment(id:number, department: Department) {
    this.departmentService.updateDepartment(id,department).subscribe();
  }

  //TODO: finish implementation
  newDepartment(department: Department) {
    this.departmentService.createDepartment(department).subscribe();
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
