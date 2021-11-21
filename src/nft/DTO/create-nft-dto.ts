import { ApiProperty } from '@nestjs/swagger';

export class CreateNftDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string;

  //TODO - Configurar e utilizar passportJs para extrair o usuário a partir do accessToken
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  value: number;
}
