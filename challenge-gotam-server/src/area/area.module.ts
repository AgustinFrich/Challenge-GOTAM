import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { databaseProviders } from '../providers/db.providers';

@Module({
  controllers: [AreaController],
  providers: [AreaService, ...databaseProviders],
})
export class AreaModule {}
