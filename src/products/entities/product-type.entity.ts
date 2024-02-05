import { BaseEntity } from 'src/core/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductType extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Product, (p) => p.productType, {
    cascade: true,
    eager: false,
  })
  products: Product[];
}
