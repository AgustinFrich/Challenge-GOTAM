import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Area } from '../../../classes/area';
import { AreaService } from '../../../services/area.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-areas',
  standalone: true,
  imports: [],
  templateUrl: './listado-areas.component.html',
  styleUrl: './listado-areas.component.css',
})
export class ListadoAreasComponent {
  @Output() areaSeleccionada: EventEmitter<Area> = new EventEmitter();
  @Input() puedeEliminar: boolean = false;

  areaService = inject(AreaService);
  listadoAreas: Area[] = [];

  ngOnInit() {
    this.traerAreas();
  }

  traerAreas() {
    this.areaService.getAll().forEach((areas) => {
      this.listadoAreas = areas;
    });
  }

  seleccionarArea(area: Area) {
    this.areaSeleccionada.emit(area);
  }

  eliminarArea(area: Area) {
    Swal.fire({
      title: `¿Desea eliminar el área ${area.nombre}?`,
      html: 'Esta acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const deleted = this.areaService.delete(area.id);
        deleted.forEach((value: any) => {
          this.traerAreas();
        });
      }
    });
  }
}