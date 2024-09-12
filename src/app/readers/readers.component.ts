import { Component, OnInit } from '@angular/core';
import { cilInfo, cilPencil, cilPlus, cilTrash } from '@coreui/icons';
import { ReadersService, Reader } from '../services/readers.service'
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.scss']
})
export class ReadersComponent implements OnInit {
  p: number = 1;
  isEditMode = false;
  readerForm = this.fb.group({
    serialNumber: ['', Validators.required],

  });
  reader: Reader = {
    _id: "0",
    serialNumber: 'N552854AG654657',
    ipAddress: "",
    status: "",
    hostname: "",
    userName: "",
    password: "",
    apiToken: "",
  }
  readers: Reader[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible: boolean = false;
  public viewModalVisible: boolean = false
  constructor(private readerService: ReadersService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getReaders();
    this.readerForm = this.fb.group({
    
      serialNumber: ['', Validators.required],
      
    });
  }

  //TODO: finish implementation
  confirmDeleteReader(id: string) {
    this.readerService.deleteReader(id).subscribe(data => this.getReaders());
  }
  //TODO: finish implementation
  getReaders() {
    this.readerService.getReaders().subscribe(readers => {
      this.readers = readers;
    });
  }
  //TODO: finish implementation
  updateReader(readerId: string) {
    if (this.readerForm.valid) {
      const updatedReader = { id: readerId, ...this.readerForm.value };
      this.readerService.updateReader(readerId, updatedReader).subscribe(data => this.getReaders());
      this.getReaders();
      this.cancel();
    }
  }


  //TODO: finish implementation
  newReader() {
    if (this.readerForm.valid) {
      const newReader = this.readerForm.value;
      this.readerService.createReader(newReader).subscribe(data => this.getReaders());
      this.getReaders();
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

  handleReaderModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openReaderModal(reader?: Reader) {
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
