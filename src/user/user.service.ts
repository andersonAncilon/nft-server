import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { SigninDto } from './DTO/signin-dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly i18n: I18nService,
    private readonly userRepository: UserRepository,
  ) {}
  async sign(signinDto: SigninDto, lang: string) {
    //TODO - Adicionar método centralizador para fazer a tradução dos retornos
    const { address, name } = signinDto;
    const user = new User(address, name || '');

    const didUserAlreadyExists = await this.userRepository.findOne({
      where: { address },
    });

    if (didUserAlreadyExists)
      return {
        success: true,
        message: await this.i18n.translate('user.SIGNIN_SUCCESS_MESSAGE', {
          lang,
        }),
      };

    try {
      await user.save();
    } catch (err) {
      return {
        success: true,
        message: await this.i18n.translate(
          'user.SIGNIN_GENERIC_ERROR_MESSAGE',
          {
            lang,
          },
        ),
        developerMessage: err,
      };
    }

    return {
      success: true,
      message: await this.i18n.translate(
        'user.SIGNIN_REGISTER_SUCCESS_MESSAGE',
        {
          lang,
        },
      ),
    };
  }
}
