import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(dto: AuthCredentialsDto): Promise<void> {
    const { username, password } = dto;
    const user = await this.create({ username, password });
    await this.save(user);
  }
}
