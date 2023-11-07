import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilInfo } from '@coreui/icons';
import { Gate, GatesService } from '../services/gates.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Department,
  DepartmentsService,
} from '../services/departments.service';
import { Camera, CamerasService } from '../services/cameras.service';
import { Reader, ReadersService } from '../services/readers.service';
import { WaveShare, WaveShareService } from '../services/wave-share.service';
import { IBreadcrumbItem } from '@coreui/angular/lib/breadcrumb';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss'],
})
export class DoorsComponent {
  doorForm: FormGroup;
  editDoorForm: FormGroup;
  doors: Gate[] | undefined;
  departments: Department[] | undefined;
  cameras: Camera[] | undefined;
  readers: Reader[] | undefined;
  waveShares: WaveShare[] | undefined;
  selectedDoor: Gate | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible: boolean = false;
  public editModalVisible: boolean = false;
  public viewModalDeleteVisible = false;

  constructor(
    private doorService: GatesService,
    private departmentService: DepartmentsService,
    private readerService: ReadersService,
    private cameraService: CamerasService,
    private waveShareService: WaveShareService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getDepartments();
    this.getDoors();
    this.getReaders();
    this.getCameras();
    this.getWaveShares();
    this.doorForm = this.fb.group({
      name: ['', Validators.required],
      department: [null, Validators.required],
      waveShare: ['', Validators.required],
      cameraEntry: [null, Validators.required],
      readerEntry: ['', Validators.required],
      cameraExit: [null, Validators.required],
      readerExit: [null, Validators.required],
    });
    this.editDoorForm = this.fb.group({
      id : [''],
      name: ['', Validators.required],
      description : ['', Validators.required],
      department: [null, Validators.required],
      waveShare: ['', Validators.required],
      camera: [null, Validators.required],
      reader: ['', Validators.required],
    });
  }

  getWaveShares() {
    this.waveShareService.getWaveShares().subscribe((waveShares) => {
      this.waveShares = waveShares;
    });
  }
  getDepartments() {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }
  getReaders() {
    this.readerService.getReaders().subscribe((readers) => {
      this.readers = readers;
    });
  }
  getCameras() {
    this.cameraService.getCameras().subscribe((cameras) => {
      this.cameras = cameras;
    });
  }

  //TODO: finish implementation
  deleteDoor() {
    this.doorService.deleteDoor(this.selectedDoor._id).subscribe(res => {
      this.viewModalDeleteVisible = false
      this.getDoors();
    });
  }
  //TODO: finish implementation
  getDoors() {
    this.doorService.getDoors().subscribe((Doors) => {
      this.doors = Doors;
    });
  }
  //TODO: finish implementation
  updateDoor(id: string, Door: Gate) {
    this.doorService.updateDoor(id, Door).subscribe();
  }

  //TODO: finish implementation
  newDoor(Door: Gate) {
    // this.doorService.createDoor(Door).subscribe();
  }

  editDoor(door: Gate | undefined) {
    if(door){
      this.selectedDoor = door;
      this.editDoorForm.setValue(door);
      this.editDoorForm.controls['department'].setValue(door.departmentGate._id)
      this.editDoorForm.controls['waveShare'].setValue(door.waveShare._id)
      // this.editDoorForm.controls['camera'].setValue(door.camera._id)
      // this.editDoorForm.controls['reader'].setValue(door.reader._id)
      this.editModalVisible = true;
    }
    console.log(this.editDoorForm.value)
  }

  detailDoor(door: Gate | undefined) {
    this.viewModalVisible = true;
    this.selectedDoor = door;
  }

  openModalDelete(door: Gate | undefined) {
    this.selectedDoor = door;
    this.viewModalDeleteVisible = true;
  }

  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false;
    this.editModalVisible = false;
    this.viewModalDeleteVisible = false;
  }
  //TODO: finish implementation

  handleDoorModalVisbilityChange(event: any) {
    this.visible = event;
  }

  handleeditDoorModalVisbilityChange(event: any) {
    this.editModalVisible = event;
  }

  openDoorModal() {
    this.visible = true;
  }

  submitDoorModal(){
    console.log(this.doorForm.value)
    const door1 = {
      name: this.doorForm.value.name,
      description : 'Entry',
      departmentId: this.doorForm.value.department ,
      readerId : this.doorForm.value.readerEntry,
      cameraId : this.doorForm.value.cameraEntry,
      waveShareId : this.doorForm.value.waveShare,
    }
    const door2 ={
      name: this.doorForm.value.name,
      description : 'Exit',
      departmentId: this.doorForm.value.department,
      readerId : this.doorForm.value.readerExit,
      cameraId : this.doorForm.value.cameraExit,
      waveShareId : this.doorForm.value.waveShare,
    }
    console.log([door1,door2])
    // this.doorService.createDoor([door1, door2]).subscribe(res => {
    //   this.getDoors()
    //   this.cancel()
    // })
  }

  submitEditDoor(){
    console.log(this.editDoorForm.value)
    this.doorService.updateDoor(this.editDoorForm.value._id, this.editDoorForm.value).subscribe(res => {
      this.getDoors()
      this.cancel()
    })
  }
}
