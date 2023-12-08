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
  isEditMode = false;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible: boolean = false;
  public viewModalDeleteVisible = false;
  public editMode = false;
  department: Department = {
    _id: 'vvreegev',
    nameDepartment: '0.0.0.0',
    ctrDepartment: 'Undefined'
  }
  
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
      nameDepartment: ['', Validators.required],
      ctrDepartment: ['', Validators.required],
    });
  }

  getCtrPannels() {
    this.cPannelsService.getCtrPanels().subscribe((cpannels) => {
      this.ctrPannels = cpannels;
    });
  }

  //TODO: finish implementation
  deleteDepartment() {
    this.departmentService.deleteDepartment(this.selectedDepartment._id).subscribe(res => {
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
  updateDepartment(departmentId: string) {
    if (this.departmentForm.valid) {
      const updatedDepartment = this.departmentForm.value ;
      this.departmentService.updateDepartment(departmentId, updatedDepartment).subscribe(data => {
        this.getDepartments();
        this.cancel();
      })
    }
  }

  //TODO: finish implementation
  newDepartment() {
    if (this.departmentForm.valid) {
      const newDepartment = this.departmentForm.value;
      this.departmentService.createDepartment(newDepartment).subscribe(data => {
        this.getDepartments();
        this.cancel()
      })
    }
  }

  editDepartment(department: Department | undefined) {
    if(department){
      this.selectedDepartment = department;
      this.editMode = true;
      this.departmentForm.setValue(department)
      this.departmentForm.controls['ctrDepartment'].setValue(department.ctrDepartment.map(el=> el._id))
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
      this.departmentService.updateDepartment(this.selectedDepartment._id,this.departmentForm.value).subscribe(res=> {
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
