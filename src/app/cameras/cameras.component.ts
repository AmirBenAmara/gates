import { Component, OnInit } from '@angular/core';
import { Camera, CamerasService } from '../services/cameras.service'
import { cilPencil, cilTrash, cilPlus } from '@coreui/icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  cameraForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    doorId: [null, Validators.required],
  });
  cameras: Camera[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus };
  public visible = false;
  constructor(private cameraService: CamerasService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.cameraForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      doorId: [null, Validators.required],
    });
  }


  //TODO: finish implementation
  deleteCamera(id: number) {
    this.cameraService.deleteCamera(id).subscribe();
  }
  //TODO: finish implementation
  getCameras() {
    this.cameraService.getCameras().subscribe(cameras => {
      this.cameras = cameras;
    });
  }
  //TODO: finish implementation
  updateCamera(camera: Camera) {
    this.cameraService.updateCamera(camera).subscribe();
  }

  //TODO: finish implementation
  newCamera(camera: Camera) {
    this.cameraService.createCamera(camera).subscribe();
  }

  //TODO: finish implementation
  cancel() {
    this.visible = false;
  }
  //TODO: finish implementation

  handleCameraModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openCameraModal() {
    this.visible = true;
  }


}
