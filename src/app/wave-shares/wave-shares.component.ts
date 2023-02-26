import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';
import { WaveShareService, WaveShare } from '../services/wave-share.service'

@Component({
  selector: 'app-wave-shares',
  templateUrl: './wave-shares.component.html',
  styleUrls: ['./wave-shares.component.scss']
})
export class WaveSharesComponent implements OnInit{
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  waveShareForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    waveShareId: [null, Validators.required],
  });
  waveShare: WaveShare = { 
    id: 1,
    ipAddress: '172.53.3.6',
    serialNumber: 'N552854AG654657',
    name: 'W Share 1',
    doorId:0 
  }
  waveShares: WaveShare[] | undefined;
  public viewModalVisible: boolean = false;
  public upsertModalVisible: boolean = false;

  constructor(private waveShareService: WaveShareService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.waveShareForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      waveShareId: [null, Validators.required],
    });
  }


  //TODO: finish implementation
  deleteWaveShare(id: number) {
    this.waveShareService.deleteWaveShare(id).subscribe();
  }
  //TODO: finish implementation
  getWaveShares() {
    this.waveShareService.getWaveShares().subscribe(waveShares => {
      this.waveShares = waveShares;
    });
  }
  //TODO: finish implementation
  updateWaveShare(id:number, waveShare: WaveShare) {
    this.waveShareService.updateWaveShare(id,waveShare).subscribe();
  }

  //TODO: finish implementation
  newWaveShare(waveShare: WaveShare) {
    this.waveShareService.createWaveShare(waveShare).subscribe();
  }
  cancel() {
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleWaveShareModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openWaveShareModal() {
    this.upsertModalVisible = true;
  }

  openViewWaveShareDetailsModal() {
    this.viewModalVisible = true;
  }


}
