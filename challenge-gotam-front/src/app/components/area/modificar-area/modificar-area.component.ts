import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AreaService } from '../../../services/area.service';
import { Area } from '../../../classes/area';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-area',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modificar-area.component.html',
  styleUrl: './modificar-area.component.css',
})
export class ModificarAreaComponent {
  @Input() area?: Area;
  @Output() recargarListado: EventEmitter<void> = new EventEmitter();

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

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['area'].currentValue !== undefined) {
      const area = changes['area'].currentValue as Area;
      this.formGroup.controls['nombre'].setValue(area.nombre);
    }
  }

  modificar() {
    if (this.formGroup.invalid || this.formGroup.get('area')?.value === '') {
      this.formGroup.controls['nombre'].markAsTouched();

      return;
    }
    const area = new Area(this.formGroup.controls['nombre'].value);
    area.id = this.area?.id;
    const peticion = this.areaService.update(area);
    peticion.forEach((value) => {
      Swal.fire('Modificado correctamente!', '', 'success');
      this.formGroup.reset();
      this.recargarListado.emit();
    });
  }
}
