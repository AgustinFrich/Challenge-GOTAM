import { Component, inject } from '@angular/core';
import { ListadoEmpleadosComponent } from '../../components/empleado/listado-empleados/listado-empleados.component';
import { DetalleEmpleadoComponent } from '../../components/empleado/detalle-empleado/detalle-empleado.component';
import { Empleado } from '../../classes/empleado';
import { ModificarAreaComponent } from '../../components/area/modificar-area/modificar-area.component';
import { ModificarEmpleadoComponent } from '../../components/empleado/modificar-empleado/modificar-empleado.component';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [
    ListadoEmpleadosComponent,
    DetalleEmpleadoComponent,
    ModificarEmpleadoComponent,
  ],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {
  empleadoSeleccionado?: Empleado;
  empleadoService = inject(EmpleadoService);
  listadoEmpleados: Empleado[] = [];

  ngOnInit() {
    this.traerEmpleados();
  }

  traerEmpleados() {
    this.empleadoService.getAll().forEach((empleados) => {
      this.listadoEmpleados = empleados;

      this.empleadoSeleccionado = empleados.find(
        (em) => em.id === this.empleadoSeleccionado?.id
      );
    });
  }

  seleccionarEmpleado($event: Empleado) {
    this.empleadoSeleccionado = $event;
  }
}
