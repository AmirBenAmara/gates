import { Component, OnInit } from '@angular/core';
import { Camera, CamerasService } from '../services/cameras.service'
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  p: number = 1;
  isEditMode = false;
  cameraForm = this.fb.group({
    serialNumber: ['', Validators.required],
  });
  camera: Camera = { 
    _id: "0",
    serialNumber: 'N552854AG654657',
  }
  cameras: Camera[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible:boolean = false;
  public viewModalVisible: boolean = false
  constructor(private cameraService: CamerasService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCameras();
    this.cameraForm = this.fb.group({
      serialNumber: ['', Validators.required],
    });
  }

  //TODO: finish implementation
  confirmDeleteCamera(id: string) {
    this.cameraService.deleteCamera(id).subscribe(data =>  this.getCameras());
  }
  //TODO: finish implementation
  getCameras() {
    this.cameraService.getCameras().subscribe(cameras => {
      this.cameras = cameras;
    });
  }
  //TODO: finish implementation
  updateCamera(cameraId: string) {
    if (this.cameraForm.valid) {
      const updatedCamera = { id: cameraId, ...this.cameraForm.value };
      this.cameraService.updateCamera(cameraId, updatedCamera).subscribe(data => this.getCameras());
      this.getCameras();
      this.cancel();
    }
  }

  //TODO: finish implementation
  newCamera() {
    if (this.cameraForm.valid) {
      const newCamera = this.cameraForm.value;
      this.cameraService.createCamera(newCamera).subscribe(data =>  this.getCameras());
      this.getCameras();
      this.cancel();
    }
  }

  //TODO: finish implementation
  cancel() {
    this.isEditMode = false;
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleCameraModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openCameraModal(camera?:Camera) {
    this.cameraForm.reset();
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
