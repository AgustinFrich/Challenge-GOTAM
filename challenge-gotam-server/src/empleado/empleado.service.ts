import { Inject, Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { DataSource, Repository } from 'typeorm';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadoService {
  @Inject('DB_CONNECTION')
  private dbConnection: DataSource;

  constructor() {}

  create(createEmpleadoDto: CreateEmpleadoDto) {
    const repository = this.dbConnection.getRepository(Empleado);
    return repository.save(createEmpleadoDto);
  }

  async findAll() {
    const repository = this.dbConnection.getRepository(Empleado);
    return await repository.find({ relations: ['area'] });
  }

  findOne(id: number) {
    const repository = this.dbConnection.getRepository(Empleado);
    return repository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    const repository = this.dbConnection.getRepository(Empleado);
    return repository.update({ id: id }, { nombre: updateEmpleadoDto.nombre });
  }

  remove(id: number) {
    const repository = this.dbConnection.getRepository(Empleado);
    return repository.delete(id);
  }
}
