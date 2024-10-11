import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { Empleado } from './empleado/entities/empleado.entity';
import { Area } from './area/entities/area.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
