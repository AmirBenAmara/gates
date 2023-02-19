import { Component, OnInit } from '@angular/core';
import { Camera, CamerasService } from '../services/cameras.service'
import { cilPencil, cilTrash, cilPlus } from '@coreui/icons';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  cameras: Camera[] | undefined;
  icons = { cilPencil, cilTrash ,cilPlus};

  constructor(private cameraService: CamerasService) { }
  ngOnInit(): void {
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

}
