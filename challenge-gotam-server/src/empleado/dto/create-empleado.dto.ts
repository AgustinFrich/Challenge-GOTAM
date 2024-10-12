import { ApiProperty } from '@nestjs/swagger';
import { Area } from '../../area/entities/area.entity';

export class CreateEmpleadoDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  fechaDeNacimiento: Date;

  @ApiProperty()
  esDesarrollador: boolean;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  area: Area;
}
