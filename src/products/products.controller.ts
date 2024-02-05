import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('brands')
  findAllProductBrands() {
    return this.productsService.findAllProductBrands();
  }

  @Get('brands/:id')
  findOneProductBrand(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOneProductBrand(+id);
  }

  @Get('types')
  findAllProductTypes() {
    return this.productsService.findAllProductTypes();
  }

  @Get('types/:id')
  findOneProductType(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOneProductType(+id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
