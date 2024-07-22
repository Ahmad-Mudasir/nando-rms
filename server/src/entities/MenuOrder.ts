import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MenuItem } from './MenuItem';
import { Order } from './Order';

@Entity()
export class MenuOrder {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Order, order => order.menuOrders)
  order!: Order;

  @ManyToOne(() => MenuItem, menuItem => menuItem.menuOrders)
  menuItem!: MenuItem;

  @Column()
  quantity!: number;
}
