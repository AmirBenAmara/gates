import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DevicesComponent } from './devices/devices.component';
import { CPanelsComponent } from './c-panels/c-panels.component';
import { CamerasComponent } from './cameras/cameras.component';
import { ReadersComponent } from './readers/readers.component';
import { ProfileService } from './services/profile.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { DoorsComponent } from './doors/doors.component';
import { GuestsComponent } from './guests/guests.component';
import { WaveSharesComponent } from './wave-shares/wave-shares.component';
import { RealTimeLogComponent } from './real-time-log/real-time-log.component';
import { DoorsStatusComponent } from './doors-status/doors-status.component';
import { DeviceStatusComponent } from './device-status/device-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'monitoring',
        component: MonitoringComponent,
        data: {
          title: 'Monitoring'
        }
      },
      {
        path: 'monitoring/real-time-log',
        component: RealTimeLogComponent,
        data: {
          title: 'Real Time Log'
        }
      },
      {
        path: 'monitoring/doors-status',
        component: DoorsStatusComponent,
        data: {
          title: 'Doors Status'
        }
      },
      {
        path: 'monitoring/device-status',
        component: DeviceStatusComponent,
        data: {
          title: 'Device Status'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'profiles',
        component: ProfilesComponent,
        data: {
          title: 'Profiles'
        }
      },
      {
        path: 'guests',
        component: GuestsComponent,
        data: {
          title: 'Guests'
        }
      },
      {
        path: 'departments',
        component: DepartmentsComponent,
        data: {
          title: 'Departments'
        }
      },
      {
        path: 'devices',
        component: DevicesComponent,
        data: {
          title: 'Devices'
        }
      },
      {
        path: 'devices/doors',
        component: DoorsComponent,
        data: {
          title: 'Doors'
        }
      },
      {
        path: 'devices/cameras',
        component: CamerasComponent,
        data: {
          title: 'Cameras'
        }
      },
      {
        path: 'devices/readers',
        component: ReadersComponent,
        data: {
          title: 'Readers'
        }
      },
      {
        path: 'devices/c-panels',
        component: CPanelsComponent,
        data: {
          title: 'Control Panels'
        }
      },
      {
        path: 'devices/wave-shares',
        component: WaveSharesComponent,
        data: {
          title: 'Wave Shares'
        }
      },
    ]
  },
  
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
