import { Component } from '@angular/core';
import { cilPencil, cilTrash, cilPlus, cilInfo, cilUser, cilMediaPause, cilClearAll, cilX } from '@coreui/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  logs= [];
  icons = { cilPencil, cilTrash, cilPlus, cilInfo, cilUser, cilMediaPause, cilClearAll, cilX };

}
