import { Inject, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { DataSource } from 'typeorm';
import { Area } from './entities/area.entity';

@Injectable()
export class AreaService {
  @Inject('DB_CONNECTION')
  private dbConnection: DataSource;

  create(createAreaDto: CreateAreaDto) {
    const repository = this.dbConnection.getRepository(Area);
    return repository.save(createAreaDto);
  }

  findAll() {
    const repository = this.dbConnection.getRepository(Area);
    return repository.find();
  }

  findOne(id: number) {
    const repository = this.dbConnection.getRepository(Area);
    return repository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    const repository = this.dbConnection.getRepository(Area);
    return repository.update({ id: id }, { ...updateAreaDto });
  }

  remove(id: number) {
    const repository = this.dbConnection.getRepository(Area);
    return repository.delete(id);
  }
}
