import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { databaseProviders } from '../providers/db.providers';
import { ConfigModule } from '@nestjs/config';

describe('EmpleadoController', () => {
  let controller: EmpleadoController;
  let service: EmpleadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [EmpleadoController],
      providers: [EmpleadoService, ...databaseProviders],
    }).compile();

    service = module.get(EmpleadoService);
    controller = module.get<EmpleadoController>(EmpleadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of empleados', async () => {
      const result: any = [];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await service.findAll()).toBe(result);
    });
  });
});
