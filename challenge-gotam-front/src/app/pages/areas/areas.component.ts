import { Component } from '@angular/core';
import { Area } from '../../classes/area';
import { ListadoAreasComponent } from '../../components/area/listado-areas/listado-areas.component';
import { ModificarAreaComponent } from '../../components/area/modificar-area/modificar-area.component';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [ListadoAreasComponent, ModificarAreaComponent],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css',
})
export class AreasComponent {
  areaSeleccionada?: Area;

  seleccionarArea($event: Area) {
    this.areaSeleccionada = $event;
  }
}
