import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  name?: string;
}
