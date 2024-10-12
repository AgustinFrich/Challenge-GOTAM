import { Component, Input } from '@angular/core';
import { Empleado } from '../../../classes/empleado';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-empleado',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './detalle-empleado.component.html',
  styleUrl: './detalle-empleado.component.css',
})
export class DetalleEmpleadoComponent {
  @Input() empleado?: Empleado;
}
