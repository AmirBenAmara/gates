import { Component } from '@angular/core';
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import {DoorsService,Door} from '../services/doors.service'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent {
  doorForm = this.fb.group({
    name: ['', Validators.required],
    departmentId: [null, Validators.required],
  });
  Doors: Door[] | undefined;
  icons = { cilPencil, cilTrash ,cilPlus};
  public visible = false;
  constructor(private DoorService: DoorsService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.doorForm = this.fb.group({
      name: ['', Validators.required],
      departmentId: [null, Validators.required],
    });
  }


  //TODO: finish implementation
  deleteDoor(id: number) {
    this.DoorService.deleteDoor(id).subscribe();
  }
  //TODO: finish implementation
  getDoors() {
    this.DoorService.getDoors().subscribe(Doors => {
      this.Doors = Doors;
    });
  }
  //TODO: finish implementation
  updateDoor(id:number, Door: Door) {
    this.DoorService.updateDoor(id,Door).subscribe();
  }

  //TODO: finish implementation
  newDoor(Door: Door) {
    this.DoorService.createDoor(Door).subscribe();
  }


  //TODO: finish implementation

  cancel() {
    this.visible = false;
  }
  //TODO: finish implementation

  handleDoorModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openDoorModal() {
    this.visible = true;
  }
  
}
