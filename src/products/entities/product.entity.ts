import { BaseEntity } from 'src/core/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductType } from './product-type.entity';
import { ProductBrand } from './product-brand.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true, length: 180 })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ nullable: true, name: 'picture_url' })
  pictureUrl: string;

  @ManyToOne(() => ProductType, (p) => p.products, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  productType: ProductType;

  @ManyToOne(() => ProductBrand, (p) => p.products, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  productBrand: ProductBrand;
}
