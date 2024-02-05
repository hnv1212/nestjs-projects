import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductType } from './entities/product-type.entity';
import { ProductBrand } from './entities/product-brand.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductType)
    private readonly productTypeRepository: Repository<ProductType>,
    @InjectRepository(ProductBrand)
    private readonly productBrandRepository: Repository<ProductBrand>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.productRepository.find({ relations: ['productType', 'productBrand']});
  }

  findOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  findAllProductTypes() {
    return this.productTypeRepository.find();
  }

  findOneProductType(id: number) {
    return this.productTypeRepository.findOne({ where: { id } });
  }

  findAllProductBrands() {
    return this.productBrandRepository.find();
  }

  findOneProductBrand(id: number) {
    return this.productBrandRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
