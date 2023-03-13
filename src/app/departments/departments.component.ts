import { Component, OnInit } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilInfo } from '@coreui/icons';
import {
  DepartmentsService,
  Department,
} from '../services/departments.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CtrPanel, CPanelsService } from '../services/c-panels.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  departmentForm: FormGroup;
  departments: Department[] | undefined;
  ctrPannels: CtrPanel[] | undefined;
  selectedDepartment: Department | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible: boolean = false;
  public viewModalDeleteVisible = false;
  public editMode = false;
  
  constructor(
    private departmentService: DepartmentsService,
    private cPannelsService: CPanelsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getDepartments();
    this.getCtrPannels();
    this.departmentForm = this.fb.group({
      id : [''],
      name: ['', Validators.required],
      ctrPannels: [[], Validators.required],
      doors : ['']
    });
  }

  getCtrPannels() {
    this.cPannelsService.getCtrPanels().subscribe((cpannels) => {
      this.ctrPannels = cpannels;
    });
  }

  //TODO: finish implementation
  deleteDepartment() {
    this.departmentService.deleteDepartment(this.selectedDepartment.id).subscribe(res => {
      this.viewModalDeleteVisible = false
      this.getDepartments()
    });
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

  editDepartment(department: Department | undefined) {
    if(department){
      this.selectedDepartment = department;
      this.editMode = true;
      this.departmentForm.setValue(department)
      this.departmentForm.controls['ctrPannels'].setValue(department.ctrPannels.map(el=> el.id))
      this.visible = true
    }
  }

  detailDepartment(department: Department | undefined) {
    this.selectedDepartment = department;
    this.viewModalVisible = true;
  }

  openModalDelete(department: Department | undefined) {
    this.selectedDepartment = department;
    this.viewModalDeleteVisible = true;
  }

  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleDepartmentModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openDepartmentModal() {
    this.visible = true;
  }

  submitDepartmentModal() {
    console.log(this.departmentForm.value);
    if(this.editMode){
      this.departmentService.updateDepartment(this.selectedDepartment.id,this.departmentForm.value).subscribe(res=> {
        this.getDepartments();
        this.cancel()
      })
    }else{
      this.departmentService.createDepartment(this.departmentForm.value).subscribe(res=> {
        this.getDepartments();
        this.cancel()
      })
    }
    
  }
}
