import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { WaveShareService, WaveShare } from '../services/wave-share.service'
import { Door, DoorsService } from '../services/doors.service';

@Component({
  selector: 'app-wave-shares',
  templateUrl: './wave-shares.component.html',
  styleUrls: ['./wave-shares.component.scss']
})
export class WaveSharesComponent implements OnInit {
  p: number = 1;
  isEditMode = false;
  doors: Door[];
  waveShareForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    doorId: [0, Validators.required],
  });
  waveShare: WaveShare = {
    id: 0,
    ipAddress: '0.0.0.0',
    serialNumber: 'N552854AG654657',
    name: 'Undefined',
    doorId: 0
  }
  waveShares: WaveShare[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible: boolean = false;
  public viewModalVisible: boolean = false
  constructor(private waveShareService: WaveShareService, private fb: FormBuilder, private doorsService: DoorsService) { }

  ngOnInit(): void {
    this.getDoors();
    this.getWaveShares();
    this.waveShareForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      doorId: [0, Validators.required],
    });
  }

  //TODO: finish implementation
  confirmDeleteWaveShare(id: number) {
    this.waveShareService.deleteWaveShare(id).subscribe(data => this.getWaveShares());
  }
  //TODO: finish implementation
  getWaveShares() {
    this.waveShareService.getWaveShares().subscribe(waveShares => {
      this.waveShares = waveShares;
    });
  }
  getDoors() {
    this.doorsService.getDoors().subscribe(doors => {
      this.doors = doors;
    })
  }
  //TODO: finish implementation
  updateWaveShare(waveShareId: number) {
    if (this.waveShareForm.valid) {
      const updatedWaveShare = this.waveShareForm.value;
      this.waveShareService.updateWaveShare(waveShareId, updatedWaveShare).subscribe(data => this.getWaveShares());
    }
  }


  //TODO: finish implementation
  newWaveShare() {
    if (this.waveShareForm.valid) {
      const newWaveShare = this.waveShareForm.value;
      this.waveShareService.createWaveShare(newWaveShare).subscribe(data => this.getWaveShares());
    }
  }

  //TODO: finish implementation
  cancel() {
    this.isEditMode = false;
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleWaveShareModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openWaveShareModal(waveShare?: WaveShare) {
    this.waveShareForm.reset();
    if (waveShare) {
      this.waveShare = waveShare;
      this.waveShareForm.patchValue(this.waveShare);
    }
    this.upsertModalVisible = true;
  }

  openViewWaveShareDetailsModal(waveShare: WaveShare) {
    this.waveShare = waveShare;
    this.viewModalVisible = true;
  }
}
