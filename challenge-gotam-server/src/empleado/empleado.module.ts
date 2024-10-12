import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { databaseProviders } from '../providers/db.providers';

@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService, ...databaseProviders],
})
export class EmpleadoModule {}
