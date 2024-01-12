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
  create(@Body() body) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
