import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'empleados',
    loadComponent: () =>
      import('./pages/empleados/empleados.component').then(
        (c) => c.EmpleadosComponent
      ),
  },
  {
    path: 'areas',
    loadComponent: () =>
      import('./pages/areas/areas.component').then((c) => c.AreasComponent),
  },
  {
    path: 'alta-empleado',
    loadComponent: () =>
      import('./pages/alta-empleado/alta-empleado.component').then(
        (c) => c.AltaEmpleadoComponent
      ),
  },
  {
    path: 'alta-area',
    loadComponent: () =>
      import('./pages/alta-area/alta-area.component').then(
        (c) => c.AltaAreaComponent
      ),
  },
];
