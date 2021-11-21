import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { AuthenticationDto } from './DTO/authentication-dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly i18n: I18nService,
    private readonly userRepository: UserRepository,
  ) {}

  //TODO - CONSUMIR SALDO DA WALLET
  //TODO - RETORNAR PROFILEPICTURE DA LISTA DE IMAGENS
  //TODO - CRIAR ENDPOINT DE EDITAR PERFIL

  async authentication(authenticationDto: AuthenticationDto) {
    const { address, name } = authenticationDto;

    const user = await this.userRepository.findOne({
      where: {
        address,
      },
    });

    if (!user) {
      const newUser = new User(address, name);
      try {
        newUser.profilePicture =
          'https://avatars.githubusercontent.com/u/50152238?v=4';
        newUser.balance = 25;

        await newUser.save();

        return {
          success: true,
          user: newUser,
        };
      } catch (error) {
        return {
          success: false,
          message: error,
        };
      }
    }

    user.balance = 25;
    return {
      success: true,
      user,
    };
  }
}
