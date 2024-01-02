import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(dto: AuthCredentialsDto): Promise<void> {
    const { username, password } = dto;
    const user = await this.create({ username, password });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
