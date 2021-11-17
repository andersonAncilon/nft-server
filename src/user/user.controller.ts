import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { I18nLang } from 'nestjs-i18n';
import { SigninDto } from './DTO/signin-dto';
import { UserService } from './user.service';

//TODO - Adicionar passportjs para autenticação de rotas
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/sign')
  async sign(@Body() signinDto: SigninDto, @I18nLang() lang: string) {
    return await this.userService.sign(signinDto, lang);
  }
}
