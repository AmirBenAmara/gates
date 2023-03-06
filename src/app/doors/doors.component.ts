import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash, cilInfo } from '@coreui/icons';
import { DoorsService, Door } from '../services/doors.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Department,
  DepartmentsService,
} from '../services/departments.service';
import { Camera, CamerasService } from '../services/cameras.service';
import { Reader, ReadersService } from '../services/readers.service';
import { WaveShare, WaveShareService } from '../services/wave-share.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss'],
})
export class DoorsComponent {
  doorForm: FormGroup;
  doors: Door[] | undefined;
  departments: Department[] | undefined;
  cameras: Camera[] | undefined;
  readers: Reader[] | undefined;
  waveShares: WaveShare[] | undefined;
  selectedDoor: Door | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public visible = false;
  public viewModalVisible: boolean = false;
  public viewModalDeleteVisible = false;

  constructor(
    private DoorService: DoorsService,
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
      waveshare: ['', Validators.required],
      cameraEntry: [null, Validators.required],
      readerEntry: ['', Validators.required],
      cameraExit: [null, Validators.required],
      ReaderExit: [null, Validators.required],
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
  deleteDoor(id: number) {
    this.DoorService.deleteDoor(id).subscribe();
  }
  //TODO: finish implementation
  getDoors() {
    this.DoorService.getDoors().subscribe((Doors) => {
      this.doors = Doors;
    });
  }
  //TODO: finish implementation
  updateDoor(id: number, Door: Door) {
    this.DoorService.updateDoor(id, Door).subscribe();
  }

  //TODO: finish implementation
  newDoor(Door: Door) {
    this.DoorService.createDoor(Door).subscribe();
  }

  editDoor(door: Door | undefined) {
    this.selectedDoor = door;
  }

  detailDoor(door: Door | undefined) {
    this.viewModalVisible = true;
    this.selectedDoor = door;
  }

  openModalDelete(door: Door | undefined) {
    this.selectedDoor = door;
    this.viewModalDeleteVisible = true;
  }

  //TODO: finish implementation

  cancel() {
    this.visible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleDoorModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openDoorModal() {
    this.visible = true;
  }

  submitDoorModal(){
    console.log(this.doorForm.value)
  }
}
