import { Component, OnInit } from '@angular/core';
import { Camera, CamerasService } from '../services/cameras.service'
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Door, DoorsService } from '../services/doors.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  p: number = 1;
  doors: Door[];
  cameraForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    doorId: [0, Validators.required],
  });
  camera: Camera = { 
    id: 0,
    ipAddress: '0.0.0.0',
    serialNumber: 'N552854AG654657',
    name: 'Undefined',
    doorId:0 
  }
  cameras: Camera[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible:boolean = false;
  public viewModalVisible: boolean = false
  constructor(private cameraService: CamerasService, private fb: FormBuilder, private doorsService: DoorsService) { }
  ngOnInit(): void {
    this.getDoors();
    this.getCameras();
    this.cameraForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      doorId: [0, Validators.required],
    });
  }


  //TODO: finish implementation
  deleteCamera(id?: number) {
    if(id)
    this.cameraService.deleteCamera(id).subscribe();
  }
  //TODO: finish implementation
  getCameras() {
    this.cameraService.getCameras().subscribe(cameras => {
      this.cameras = cameras;
    });
  }
  getDoors() {
    this.doorsService.getDoors().subscribe(doors => {
      this.doors = doors;
    })
  }
  //TODO: finish implementation
  updateCamera() {
    if (this.cameraForm.valid) {
  
      const updatedCamera = this.cameraForm.value;
  
      this.cameraService.updateCamera(updatedCamera).subscribe(data =>  this.getCameras() );
    }
  }
  

  //TODO: finish implementation
  newCamera(camera: Camera) {
    this.cameraService.createCamera(camera).subscribe();
  }

  //TODO: finish implementation
  cancel() {
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleCameraModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openCameraModal(camera?:Camera) {
    if (camera) {
      this.camera = camera;
      this.cameraForm.patchValue(this.camera);
    }
    this.upsertModalVisible = true;
  }

  openViewCameraDetailsModal(camera: Camera) {
    this.camera = camera;
    this.viewModalVisible = true;
  }


}
