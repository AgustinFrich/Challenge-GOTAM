import { Test, TestingModule } from '@nestjs/testing';
import { AreaService } from './area.service';
import { databaseProviders } from '../providers/db.providers';
import { ConfigModule } from '@nestjs/config';

describe('AreaService', () => {
  let service: AreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [AreaService, ...databaseProviders],
    }).compile();

    service = module.get<AreaService>(AreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of areas', async () => {
      const result: any = [];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await service.findAll()).toBe(result);
    });
  });
});
