import { AfterViewInit, Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit {

  public navItems = []
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private readonly   translateService : TranslateService) {
    this.translateService.onLangChange.subscribe(() => {

      this.setNavItems();
      });
  }
  ngOnInit(): void {

  }
  async setNavItems() {
    this.navItems = [];
    const navs = navItems.map(async (item) => {
      console.log(item)
      // map items with translate service

            item.name = await firstValueFrom(this.translateService.get(item.class));

          if (item.children) {
            const children = item.children.map(async (child) => {
              child.name = await firstValueFrom(this.translateService.get(child.class));;
              return child;
            });
            item.children = await Promise.all(children);
          }
          return item;
      });
      setTimeout(async() => {
        this.navItems = await Promise.all(navs);
      }, 0);
  }

  ngAfterViewInit() {
    this.setNavItems();
    
  }
}
