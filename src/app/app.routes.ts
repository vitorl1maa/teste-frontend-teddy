import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./pages/registration-page/registration-page.module')
        .then(m => m.RegistrationPageModule)
  },
  {
    path: 'clientes', loadChildren: () =>
      import('./pages/clients-page/clients-page.module')
        .then(m => m.ClientsPageModule)
  },
  { path: '**', redirectTo: '' }
];