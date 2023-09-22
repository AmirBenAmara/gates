import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cilLanguage} from '@coreui/icons';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  icons=  {cilLanguage } 
  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,
    private translateService: TranslateService) {
    super();
  }
  changeTo(lang: string) { 
      this.setHTMLDir(lang === 'ar' ? 'rtl' : 'ltr');
    this.translateService.use(lang);
  
  }

  setHTMLDir(dir:string) {
    // adds dir to html tag
    document.documentElement.dir = dir;

  }
}
