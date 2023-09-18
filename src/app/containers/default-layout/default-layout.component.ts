import { Component } from '@angular/core';

import { navItems } from './_nav';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private translateService : TranslateService) {}
  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use('fr');
    this.navItems = this.navItems.map((item) => {
      // map items with translate service
          if (item.name) {
            item.name = this.translateService.instant(item.name);
          }
          if (item.children) {
            item.children = item.children.map((child) => {
              child.name = this.translateService.instant(child.name);
              return child;
            });
          }
          return item;
        });
      
  }
}
