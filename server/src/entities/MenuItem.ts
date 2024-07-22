import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { MenuCategory } from './MenuCategory';
import { MenuOrder } from './MenuOrder';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  image!: string;

  @Column()
  name!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @ManyToOne(() => MenuCategory, category => category.menuItems)
  category!: MenuCategory;

  @OneToMany(() => MenuOrder, menuOrder => menuOrder.menuItem)
  menuOrders!: MenuOrder[];
}
