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
      nameGate: ['', Validators.required],
      departmentGate: [null, Validators.required],
      waveShare: ['', Validators.required],
      cameraEntry: ['', Validators.required],
      readerEntry: ['', Validators.required],
      cameraExit: ['', Validators.required],
      readerExit: ['', Validators.required],
    });
    this.editDoorForm = this.fb.group({
      id : [''],
      nameGate: ['', Validators.required],
      departmentGate: [null, Validators.required],
      waveShare: ['', Validators.required],
      cameraEntry: ['', Validators.required],
      readerEntry: ['', Validators.required],
      cameraExit: ['', Validators.required],
      readerExit: ['', Validators.required],
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
      this.editDoorForm.controls['departmentGate'].setValue(door.departmentGate._id)
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
    const Gate : Gate = {
      nameGate: this.doorForm.value.nameGate,
      departmentGate: this.doorForm.value.departmentGate ,
      waveShare : this.doorForm.value.waveShare,
      entryDevices : {
        camera : this.doorForm.value.cameraEntry,
        reader : this.doorForm.value.readerEntry,
      },
      exitDevices : {
        camera : this.doorForm.value.cameraExit,
        reader : this.doorForm.value.readerExit,
      }
    }
  
    this.doorService.createDoor(Gate).subscribe(res => {
      this.getDoors()
      this.cancel()
    })
  }

  submitEditDoor(){
    console.log(this.editDoorForm.value)
    // this.doorService.updateDoor().subscribe(res => {
    //   this.getDoors()
    //   this.cancel()
    // })
  }
}
