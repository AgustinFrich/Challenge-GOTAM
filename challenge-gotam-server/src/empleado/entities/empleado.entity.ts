import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Area } from '../../area/entities/area.entity';

/*
      Cada empleado deberá tener:
      - Nombre Completo
      - Documento de identidad
      - Fecha de nacimiento
      - Si es o no desarrollador
      - Una breve descripción
      - Área a la que pertenece
  */

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column('date')
  fechaDeNacimiento: Date;

  @Column('boolean')
  esDesarrollador: boolean;

  @Column('text')
  descripcion: string;

  @ManyToOne(() => Area, (area) => area.empleados)
  @JoinColumn()
  area: Area;
}
