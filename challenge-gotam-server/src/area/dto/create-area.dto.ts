import { ApiProperty } from '@nestjs/swagger';

export class CreateAreaDto {
  @ApiProperty()
  nombre: string;
}
