import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AreaService } from '../../services/area.service';
import { Area } from '../../classes/area';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-area',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './alta-area.component.html',
  styleUrl: './alta-area.component.css',
})
export class AltaAreaComponent {
  fb = inject(FormBuilder);
  formGroup: FormGroup;
  areaService = inject(AreaService);

  constructor() {
    this.formGroup = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Záéíóú ]*'),
        ],
      ],
    });
  }

  darDeAlta() {
    if (this.formGroup.invalid || this.formGroup.get('area')?.value === '') {
      this.formGroup.controls['nombre'].markAsTouched();

      return;
    }
    const area = new Area(this.formGroup.controls['nombre'].value);

    const peticion = this.areaService.add(area);
    peticion.forEach((value) => {
      Swal.fire('Dado de alta!', '', 'success');
      this.formGroup.reset();
    });
  }
}
