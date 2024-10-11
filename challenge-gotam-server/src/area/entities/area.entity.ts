import { Empleado } from 'src/empleado/entities/empleado.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  nombre: string;

  @OneToMany(() => Empleado, (empleado) => empleado.area)
  empleados: Empleado[];
}
