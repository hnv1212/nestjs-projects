import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductBrand } from './entities/product-brand.entity';
import { ProductType } from './entities/product-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductBrand, ProductType])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
