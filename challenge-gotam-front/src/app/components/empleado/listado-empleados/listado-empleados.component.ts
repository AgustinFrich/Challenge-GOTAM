import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Empleado } from '../../../classes/empleado';
import { EmpleadoService } from '../../../services/empleado.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listado-empleados',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css',
})
export class ListadoEmpleadosComponent {
  @Output() empleadoSeleccionado: EventEmitter<Empleado> = new EventEmitter();
  @Output() recargarListado: EventEmitter<void> = new EventEmitter();
  @Input() listadoEmpleados: Empleado[] = [];
  empleadoService = inject(EmpleadoService);

  seleccionarEmpleado(empleado: Empleado) {
    this.empleadoSeleccionado.emit(empleado);
  }

  eliminarEmpleado(empleado: Empleado) {
    Swal.fire({
      title: `¿Desea eliminar el empleado ${empleado.nombre}?`,
      html: 'Esta acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const deleted = this.empleadoService.delete(empleado.id!);
        deleted.forEach((value: any) => {
          this.recargarListado.emit();
        });
      }
    });
  }
}
