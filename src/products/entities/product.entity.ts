import { BaseEntity } from 'src/core/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { ProductType } from './product-type.entity';
import { ProductBrand } from './product-brand.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  pictureUrl: string;

  //   @Column()
  //   productType: ProductType;

  @Column()
  productTypeId: number;

  //   @Column()
  //   productBrand: ProductBrand;

  @Column()
  productBrandId: number;
}
