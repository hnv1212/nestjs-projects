import { BaseEntity } from 'src/core/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProductType extends BaseEntity {
  @Column()
  name: string;
}
