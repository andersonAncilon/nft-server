import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationDto } from './DTO/authentication-dto';
import { GetFavoritesDto } from './DTO/get-favorites-dto';
import { UserService } from './user.service';

//TODO - Adicionar passportjs para autenticação de rotas
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('authentication')
  async authentication(@Body() authenticationDto: AuthenticationDto) {
    return this.userService.authentication(authenticationDto);
  }

  @Get('getFavorites/:user_id')
  async getFavorites(@Param() getFavoriteDto: GetFavoritesDto) {
    return this.userService.getFavorites(getFavoriteDto);
  }
}
