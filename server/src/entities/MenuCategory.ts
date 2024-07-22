import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MenuItem } from './MenuItem';

@Entity()
export class MenuCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => MenuItem, menuItem => menuItem.category)
  menuItems!: MenuItem[];
}