import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, OneToMany } from 'typeorm'

import { Incidents } from './Incidents'

@Entity()
export class Ongs extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsaap: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(() => Incidents, ongIncident => ongIncident.ong)
  ongIncident: Incidents[];
}
