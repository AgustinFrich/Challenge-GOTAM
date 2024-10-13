import { Test, TestingModule } from '@nestjs/testing';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';
import { databaseProviders } from '../providers/db.providers';
import { ConfigModule } from '@nestjs/config';
import { Area } from './entities/area.entity';

describe('AreaController', () => {
  let controller: AreaController;
  let service: AreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [AreaController],
      providers: [AreaService, ...databaseProviders],
    }).compile();

    controller = module.get<AreaController>(AreaController);
    service = module.get(AreaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result: any = [];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await service.findAll()).toBe(result);
    });
  });
});
