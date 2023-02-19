import { Component, OnInit } from '@angular/core';
import { DepartmentsService, Department } from '../services/departments.service'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] | undefined;

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

}
