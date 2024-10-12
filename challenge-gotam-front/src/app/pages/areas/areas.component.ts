import { Component, inject } from '@angular/core';
import { Area } from '../../classes/area';
import { ListadoAreasComponent } from '../../components/area/listado-areas/listado-areas.component';
import { ModificarAreaComponent } from '../../components/area/modificar-area/modificar-area.component';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [ListadoAreasComponent, ModificarAreaComponent],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css',
})
export class AreasComponent {
  areaSeleccionada?: Area;
  listadoAreas: Area[] = [];
  areaService = inject(AreaService);

  ngOnInit() {
    this.traerAreas();
  }

  traerAreas() {
    this.areaService.getAll().forEach((areas) => {
      this.listadoAreas = areas;

      this.areaSeleccionada = areas.find(
        (em) => em.id === this.areaSeleccionada?.id
      );
    });
  }

  seleccionarArea($event: Area) {
    this.areaSeleccionada = $event;
  }
}
