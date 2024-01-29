import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { authenticator } from 'otplib';

@Injectable()
export class OtpAuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async generateSecret(email: string) {
    const secret = authenticator.generateSecret();
    const appName = this.configService.getOrThrow('TFA_APP_NAME');
    const uri = authenticator.keyuri(email, appName, secret);
    return { uri, secret };
  }

  verifyCode(code: string, secret: string) {
    return authenticator.verify({
      token: code,
      secret,
    });
  }

  async enableTfaForUser(email: string, secret: string) {
    const { id } = await this.usersRepository.findOneOrFail({
      where: { email },
      select: { id: true },
    });
    await this.usersRepository.update(
      { id },
      // TIP: Ideally, we would want to encrypt the "secret" instead of storing it in a plaintext.
      // NOTE: we counldn't use hashing here as the original secret is require to verify the user's provided code.
      { tfaSecret: secret, isTfaEnabled: true },
    );
  }
}
