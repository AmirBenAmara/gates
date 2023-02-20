import { Component, OnInit } from '@angular/core';
import { cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import { ReadersService, Reader } from '../services/readers.service'
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.scss']
})
export class ReadersComponent implements OnInit {
  readerForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    doorId: [null, Validators.required],
  });
  readers: Reader[] | undefined;
  icons = { cilPencil, cilTrash ,cilPlus};
  public visible = false;

  constructor(private readerService: ReadersService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.readerForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      doorId: [null, Validators.required],
    });
  }


  //TODO: finish implementation
  deleteReader(id: number) {
    this.readerService.deleteReader(id).subscribe();
  }
  //TODO: finish implementation
  getReaders() {
    this.readerService.getReaders().subscribe(readers => {
      this.readers = readers;
    });
  }
  //TODO: finish implementation
  updateReader(id:number, reader: Reader) {
    this.readerService.updateReader(id,reader).subscribe();
  }

  //TODO: finish implementation
  newReader(reader: Reader) {
    this.readerService.createReader(reader).subscribe();
  }

  //TODO: finish implementation

  cancel() {
    this.visible = false;
  }
  //TODO: finish implementation

  handleReaderModalVisbilityChange(event: any) {
    this.visible = event;
  }

  openReaderModal() {
    this.visible = true;
  }
  

}
