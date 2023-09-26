import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    class: "menu.dashboard",
    name: "menu.dashboard",
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  // {
  //   name: 'Monitoring',
  //   url: '/monitoring',
  //   iconComponent: { name: 'cil-audio-spectrum' },
  // },
  {
    class: "menu.monitoring",
    name: "menu.monitoring",
    iconComponent: { name: 'cil-audio-spectrum' },
    children: [

      {
        class: "menu.realTimeLog",
        name: "menu.realTimeLog",
        url: 'monitoring/real-time-log',
        iconComponent: { name: 'cil-camera-roll' },
      },
      {
        class: "menu.doorsStatus",
        name: "menu.doorsStatus",
        url: 'monitoring/doors-status',
        iconComponent: { name: 'cil-double-quote-sans-right' },
      },
      {
        class: "menu.deviceStatus",
        name: "menu.deviceStatus",
        url: 'monitoring/device-status',
        iconComponent: { name: 'cil-lan' },
      },
    ]
  },
  {
    class: "menu.users",
    name: "menu.users",
    url: '/users',
    iconComponent: { name: 'cil-group' },
  },
  {
    class: "menu.profiles",
    name: "menu.profiles",
    url: '/profiles',
    iconComponent: { name: 'cil-voice-over-record' },
  },
  {
    class: "menu.guests",
    name: "menu.guests",
    url: '/guests',
    iconComponent: { name: 'cil-user-plus' },
  },
  {
    class: "menu.doors",
    name: "menu.doors",
    url: '/devices/doors',
    iconComponent: { name: 'cil-double-quote-sans-right' },

  },
  {
    class: "menu.departments",
    name: "menu.departments",
    url: '/departments',
    iconComponent: { name: 'cil-building' },
  },
  {
    class: "menu.devices",
    name: "menu.devices",
    iconComponent: { name: 'cil-lan' },
    children: [

      {
        class: "menu.cameras",
        name: "menu.cameras",
        url: '/devices/cameras',
        iconComponent: { name: 'cil-camera-roll' },

      },
      {
        class: "menu.readers",
        name: "menu.readers",
        url: '/devices/readers',
        iconComponent: { name: 'cil-camera-control' },
      },
      {
        class: "menu.controlPanels",
        name: "menu.controlPanels",
        url: '/devices/c-panels',
        iconComponent: { name: 'cil-barcode' },
      },
      {
        class: "menu.waveShares",
        name: "menu.waveShares",
        url: '/devices/wave-shares',
        iconComponent: { name: 'cil-stream' },

      },
    ]
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'someAnchor' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion'
  //     },
  //     {
  //       name: 'Breadcrumbs',
  //       url: '/base/breadcrumbs'
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/base/cards'
  //     },
  //     {
  //       name: 'Carousel',
  //       url: '/base/carousel'
  //     },
  //     {
  //       name: 'Collapse',
  //       url: '/base/collapse'
  //     },
  //     {
  //       name: 'List Group',
  //       url: '/base/list-group'
  //     },
  //     {
  //       name: 'Navs & Tabs',
  //       url: '/base/navs'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/pagination'
  //     },
  //     {
  //       name: 'Placeholder',
  //       url: '/base/placeholder'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress'
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/base/spinners'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons'
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns'
  //     },
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control'
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select'
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios'
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range'
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group'
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels'
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout'
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];
