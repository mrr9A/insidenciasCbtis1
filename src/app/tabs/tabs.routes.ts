import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'registerAlumno',
        loadComponent: () =>
          import('../components/register-alumno/register-alumno.component').then((m) => m.RegisterAlumnoComponent),
      },
      {
        path: 'registerAdmin',
        loadComponent: () =>
          import('../components/register-administrativo/register-administrativo.component').then((m) => m.RegisterAdministrativoComponent),
      },
      {
        path: 'registeRespon',
        loadComponent: () =>
          import('../components/register-responsable/register-responsable.component').then((m) => m.RegisterResponsableComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
