import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EmpleadoModule } from 'src/empleado/empleado.module';
import { AreaModule } from 'src/area/area.module';

@Module({
  imports: [ConfigModule.forRoot(), EmpleadoModule, AreaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
