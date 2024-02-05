import { BaseEntity } from 'src/core/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductBrand extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Product, (p) => p.productBrand, {
    cascade: true,
    eager: false,
  })
  products: Product[];
}
