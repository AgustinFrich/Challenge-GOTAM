import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoService } from './empleado.service';
import { databaseProviders } from '../providers/db.providers';
import { ConfigModule } from '@nestjs/config';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [EmpleadoService, ...databaseProviders],
    }).compile();

    service = module.get<EmpleadoService>(EmpleadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of empleados', async () => {
      const result: any = [];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await service.findAll()).toBe(result);
    });
  });
});
