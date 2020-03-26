import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne
} from 'typeorm'

import { Ongs } from './Ongs'

@Entity()
export class Incidents extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /** */
  @Column()
  ongId: string;

  @ManyToOne(() => Ongs, ong => ong.ongIncident)
  @JoinColumn({ name: 'ongId' })
  ong: Ongs;
  /** */

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
