import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignDto } from './DTO/sign-dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Post('/sign')
  async sign(@Body() signDto: SignDto) {}
}
