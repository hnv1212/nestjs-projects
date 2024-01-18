import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Public } from 'src/common/decorators/public.decorator';

// @UsePipes(ValidationPipe)
@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeesService: CoffeesService,
    @Inject(REQUEST) private readonly request: Request,
  ) {
    console.log('🚀 ~ CoffeesController created!');
  }

  // @UsePipes(ValidationPipe)
  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {}

  @Patch(':id')
  update(@Param('id') id: number, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {}

  @Delete(':id')
  remove(@Param('id') id: number) {}
}
