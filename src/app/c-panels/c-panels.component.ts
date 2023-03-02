import { Component, OnInit } from '@angular/core';
import { CPanelsService, CtrPanel } from '../services/c-panels.service'
import { Validators, FormBuilder } from '@angular/forms';
import { cilPencil, cilTrash, cilPlus, cilInfo } from '@coreui/icons';

@Component({
  selector: 'app-c-panels',
  templateUrl: './c-panels.component.html',
  styleUrls: ['./c-panels.component.scss']
})
export class CPanelsComponent implements OnInit {
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  ctrPanelForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    doorId: [null, Validators.required],
  });
  ctrPanel: CtrPanel = {
    id: 1,
    ipAddress: '172.53.3.6',
    serialNumber: 'N552854AG654657',
    name: 'C Panel 1',
    doorId: 0
  }
  ctrPanels: CtrPanel[] | undefined;
  public viewModalVisible: boolean = false;
  public upsertModalVisible: boolean = false;
  constructor(private ctrPanelService: CPanelsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCtrPanels();
    this.ctrPanelForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      doorId: [null, Validators.required],
    });
  }


  //TODO: finish implementation
  deleteCtrPanel(id: number) {
    this.ctrPanelService.deleteCtrPanel(id).subscribe();
  }
  //TODO: finish implementation
  getCtrPanels() {
    this.ctrPanelService.getCtrPanels().subscribe(ctrPanels => {
      this.ctrPanels = ctrPanels;
    });
  }
  //TODO: finish implementation
  updateCtrPanel(id: number, ctrPanel: CtrPanel) {
    this.ctrPanelService.updateCtrPanel(id, ctrPanel).subscribe();
  }

  //TODO: finish implementation
  newCtrPanel(ctrPanel: CtrPanel) {
    this.ctrPanelService.createCtrPanel(ctrPanel).subscribe();
  }
  cancel() {
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleCtrPanelModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openCtrPanelModal() {
    this.upsertModalVisible = true;
  }

  openViewCtrPanelDetailsModal() {
    this.viewModalVisible = true;
  }

}
