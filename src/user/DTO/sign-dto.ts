import { ApiProperty } from '@nestjs/swagger';
import { Blob } from 'buffer';

export class SignDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  profilePicture?: string;
}
