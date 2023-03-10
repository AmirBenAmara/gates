import { Component, OnInit } from '@angular/core';
import { cilInfo, cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import { ReadersService, Reader } from '../services/readers.service'
import { Validators, FormBuilder } from '@angular/forms';
import { Door, DoorsService } from '../services/doors.service';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.scss']
})
export class ReadersComponent implements OnInit {
  p: number = 1;
  isEditMode = false;
  doors: Door[];
  readerForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    doorId: [0, Validators.required],
  });
  reader: Reader = { 
    id: 0,
    ipAddress: '0.0.0.0',
    serialNumber: 'N552854AG654657',
    name: 'Undefined',
    doorId:0 
  }
  readers: Reader[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible:boolean = false;
  public viewModalVisible: boolean = false
  constructor(private readerService: ReadersService, private fb: FormBuilder, private doorsService: DoorsService) { }

  ngOnInit(): void {
    this.getDoors();
    this.getReaders();
    this.readerForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      doorId: [0, Validators.required],
    });
  }

  //TODO: finish implementation
  confirmDeleteReader(id: number) {
    this.readerService.deleteReader(id).subscribe(data =>  this.getReaders());
  }
  //TODO: finish implementation
  getReaders() {
    this.readerService.getReaders().subscribe(readers => {
      this.readers = readers;
    });
  }
  getDoors() {
    this.doorsService.getDoors().subscribe(doors => {
      this.doors = doors;
    })
  }
  //TODO: finish implementation
  updateReader(readerId:number) {
    if (this.readerForm.valid) {
        const updatedReader = this.readerForm.value;
      this.readerService.updateReader(readerId,updatedReader).subscribe(data =>  this.getReaders() );
    }
  }
  

  //TODO: finish implementation
  newReader() {
    if (this.readerForm.valid) {
      const newReader = this.readerForm.value;
      this.readerService.createReader(newReader).subscribe(data =>  this.getReaders());
    }
  }

  //TODO: finish implementation
  cancel() {
    this.isEditMode = false;
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleReaderModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openReaderModal(reader?:Reader) {
    this.readerForm.reset();
    if (reader) {
      this.reader = reader;
      this.readerForm.patchValue(this.reader);
    }
    this.upsertModalVisible = true;
  }

  openViewReaderDetailsModal(reader: Reader) {
    this.reader = reader;
    this.viewModalVisible = true;
  }
}
