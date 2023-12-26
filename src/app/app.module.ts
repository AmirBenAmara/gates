import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';


import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';
import {TranslateModule, TranslateModuleConfig} from '@ngx-translate/core';
// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  TableModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
  ModalModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DevicesComponent } from './devices/devices.component';
import { CamerasComponent } from './cameras/cameras.component';
import { ReadersComponent } from './readers/readers.component';
import { CPanelsComponent } from './c-panels/c-panels.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesComponent } from './profiles/profiles.component';
import { DoorsComponent } from './doors/doors.component';
import { GuestsComponent } from './guests/guests.component';
import { WaveSharesComponent } from './wave-shares/wave-shares.component';
import { RealTimeLogComponent } from './real-time-log/real-time-log.component';
import { DoorsStatusComponent } from './doors-status/doors-status.component';
import { DeviceStatusComponent } from './device-status/device-status.component';
import { HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsModule } from './views/widgets/widgets.module';
import { PagesModule } from './views/pages/pages.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, MonitoringComponent, UsersComponent, DepartmentsComponent, DevicesComponent, CamerasComponent, ReadersComponent, CPanelsComponent, ProfilesComponent, DoorsComponent, GuestsComponent, WaveSharesComponent, RealTimeLogComponent, DoorsStatusComponent, DeviceStatusComponent, DashboardComponent],
  imports: [
    BrowserModule,
    WidgetsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    TableModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    ModalModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
