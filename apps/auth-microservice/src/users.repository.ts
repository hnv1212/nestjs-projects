import { User } from '@app/shared/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  save(user: User) {
    this.users.push({ ...user, id: this.users.length + 1 });
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }
}
