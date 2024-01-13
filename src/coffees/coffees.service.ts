import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    if (!coffee) {
      throw new NotFoundException();
    }
    return coffee;
  }

  create(dto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(dto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: number, dto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id,
      ...dto,
    });
    if (!coffee) {
      throw new NotFoundException();
    }
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }
}
