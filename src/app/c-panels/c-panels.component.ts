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
  p: number = 1;
  isEditMode = false;
  ctrPanelForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
  });
  ctrPanel: CtrPanel = { 
    id: 0,
    ipAddress: '0.0.0.0',
    serialNumber: 'N552854AG654657',
    name: 'Undefined',
  }
  ctrPanels: CtrPanel[] | undefined;
  icons = { cilPencil, cilTrash, cilPlus, cilInfo };
  public upsertModalVisible:boolean = false;
  public viewModalVisible: boolean = false
  constructor(private ctrPanelService: CPanelsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCtrPanels();
    this.ctrPanelForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  //TODO: finish implementation
  confirmDeleteCtrPanel(id: number) {
    this.ctrPanelService.deleteCtrPanel(id).subscribe(data =>  this.getCtrPanels());
  }
  //TODO: finish implementation
  getCtrPanels() {
    this.ctrPanelService.getCtrPanels().subscribe(ctrPanels => {
      this.ctrPanels = ctrPanels;
    });
  }
  //TODO: finish implementation
  updateCtrPanel(ctrPanelId:number) {
    if (this.ctrPanelForm.valid) {
        const updatedCtrPanel = this.ctrPanelForm.value;
      this.ctrPanelService.updateCtrPanel(ctrPanelId, updatedCtrPanel).subscribe(data =>  this.getCtrPanels() );
    }
  }
  

  //TODO: finish implementation
  newCtrPanel() {
    if (this.ctrPanelForm.valid) {
      const newCtrPanel = this.ctrPanelForm.value;
      this.ctrPanelService.createCtrPanel(newCtrPanel).subscribe(data =>  this.getCtrPanels());
    }
  }

  //TODO: finish implementation
  cancel() {
    this.isEditMode = false;
    this.upsertModalVisible = false;
    this.viewModalVisible = false;
  }
  //TODO: finish implementation

  handleCtrPanelModalVisbilityChange(event: any) {
    this.upsertModalVisible = event;
  }

  openCtrPanelModal(ctrPanel?:CtrPanel) {
    this.ctrPanelForm.reset();
    if (ctrPanel) {
      this.ctrPanel = ctrPanel;
      this.ctrPanelForm.patchValue(this.ctrPanel);
    }
    this.upsertModalVisible = true;
  }

  openViewCtrPanelDetailsModal(ctrPanel: CtrPanel) {
    this.ctrPanel = ctrPanel;
    this.viewModalVisible = true;
  }
}
