import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
