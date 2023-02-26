import { Component, OnInit } from '@angular/core';
import { Camera, CamerasService } from '../services/cameras.service'
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
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
  camera: Camera = { 
    id: 1,
    ipAddress: '172.53.3.6',
    serialNumber: 'N552854AG654657',
    name: 'Camera 1',
    doorId:0 
  }
  cameras: Camera[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible:boolean = false;
  public viewModalVisible: boolean = false
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
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleCameraModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openCameraModal() {
    this.upsertModalVisible = true;
  }

  openViewCameraDetailsModal() {
    this.viewModalVisible = true;
  }


}
