import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Empleado } from '../../../classes/empleado';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmpleadoService } from '../../../services/empleado.service';
import { Area } from '../../../classes/area';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-empleado',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modificar-empleado.component.html',
  styleUrl: './modificar-empleado.component.css',
})
export class ModificarEmpleadoComponent {
  @Input() empleado?: Empleado;
  @Output() recargarListado: EventEmitter<void> = new EventEmitter();

  fb = inject(FormBuilder);
  formGroup: FormGroup;
  empleadoService = inject(EmpleadoService);

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['empleado'].currentValue !== undefined) {
      const em = changes['empleado'].currentValue as Empleado;
      this.formGroup.controls['nombre'].setValue(em.nombre);
      this.formGroup.controls['esDesarrollador'].setValue(em.esDesarrollador);
      this.formGroup.controls['fechaDeNacimiento'].setValue(
        em.fechaDeNacimiento
      );
      this.formGroup.controls['descripcion'].setValue(em.descripcion);
    }
  }

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
    });
  }

  modificar() {
    if (this.formGroup.invalid) {
      this.formGroup.controls['nombre'].markAsTouched();
      this.formGroup.controls['esDesarrollador'].markAsTouched();
      this.formGroup.controls['fechaDeNacimiento'].markAsTouched();
      this.formGroup.controls['descripcion'].markAsTouched();
      return;
    }

    const empleado = new Empleado(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['esDesarrollador'].value,
      this.formGroup.controls['fechaDeNacimiento'].value,
      this.formGroup.controls['descripcion'].value,
      this.empleado!.area
    );

    empleado.id = this.empleado?.id;

    console.log(this.formGroup.controls['descripcion'].value);
    const peticion = this.empleadoService.update(empleado);
    peticion.forEach((value) => {
      Swal.fire('Modificado!', '', 'success');
      this.recargarListado.emit();
    });
  }
}
