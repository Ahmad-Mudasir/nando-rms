import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MenuOrder } from './MenuOrder';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount!: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  })
  orderStatus!: string;

  @OneToMany(() => MenuOrder, menuOrder => menuOrder.order)
  menuOrders!: MenuOrder[];
}
