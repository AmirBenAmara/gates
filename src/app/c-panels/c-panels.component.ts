import { Component, OnInit } from '@angular/core';
import { CPanelsService, CtrPanel } from '../services/c-panels.service'
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-c-panels',
  templateUrl: './c-panels.component.html',
  styleUrls: ['./c-panels.component.scss']
})
export class CPanelsComponent implements OnInit {
  ctrPanelForm = this.fb.group({
    ipAddress: ['', Validators.required],
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    ctrPanelId: [null, Validators.required],
  });
  ctrPanels: CtrPanel[] | undefined;

  constructor(private ctrPanelService: CPanelsService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.ctrPanelForm = this.fb.group({
      ipAddress: ['', Validators.required],
      serialNumber: ['', Validators.required],
      name: ['', Validators.required],
      ctrPanelId: [null, Validators.required],
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
  updateCtrPanel(id:number, ctrPanel: CtrPanel) {
    this.ctrPanelService.updateCtrPanel(id,ctrPanel).subscribe();
  }

  //TODO: finish implementation
  newCtrPanel(ctrPanel: CtrPanel) {
    this.ctrPanelService.createCtrPanel(ctrPanel).subscribe();
  }

}
