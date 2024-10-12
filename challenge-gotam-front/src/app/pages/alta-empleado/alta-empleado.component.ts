import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ListadoAreasComponent } from '../../components/area/listado-areas/listado-areas.component';
import { Area } from '../../classes/area';
import { Empleado } from '../../classes/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-empleado',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ListadoAreasComponent],
  templateUrl: './alta-empleado.component.html',
  styleUrl: './alta-empleado.component.css',
})
export class AltaEmpleadoComponent {
  fb = inject(FormBuilder);
  formGroup: FormGroup;
  areaSeleccionada?: Area;
  empleadoService = inject(EmpleadoService);

  constructor() {
    this.formGroup = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(8),
          Validators.pattern('[a-zA-Záéíóú ]*'),
        ],
      ],
      esDesarrollador: [false, [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaDeNacimiento: ['', [Validators.required]],
      area: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.formGroup.get('area')?.disable({ onlySelf: true });
  }

  seleccionarArea($event: Area) {
    this.areaSeleccionada = $event;
    this.formGroup.controls['area'].setValue(this.areaSeleccionada.nombre);
    console.log($event);
  }

  darDeAlta() {
    if (this.formGroup.invalid || this.formGroup.get('area')?.value === '') {
      this.formGroup.controls['nombre'].markAsTouched();
      this.formGroup.controls['esDesarrollador'].markAsTouched();
      this.formGroup.controls['fechaDeNacimiento'].markAsTouched();
      this.formGroup.controls['descripcion'].markAsTouched();
      this.formGroup.controls['area'].markAsTouched();
      console.log(this.formGroup.controls['area'].touched);
      console.log(this.formGroup.controls);
      return;
    }
    const empleado = new Empleado(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['esDesarrollador'].value,
      this.formGroup.controls['fechaDeNacimiento'].value,
      this.formGroup.controls['descripcion'].value,
      this.areaSeleccionada!
    );

    const peticion = this.empleadoService.add(empleado);
    peticion.forEach((value) => {
      Swal.fire('Dado de alta!', '', 'success');
    });
  }
}
