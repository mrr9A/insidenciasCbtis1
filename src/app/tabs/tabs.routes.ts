import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'cbtis248',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'anuncios',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'perfil',
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
        path: 'addAviso',
        loadComponent: () =>
          import('../components/register-aviso/register-aviso.component').then((m) => m.RegisterAvisoComponent),
      },
      {
        path: '',
        redirectTo: '/cbtis248/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/cbtis248/inicio',
    pathMatch: 'full',
  },
];
