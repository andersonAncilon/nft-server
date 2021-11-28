import { ApiProperty } from '@nestjs/swagger';

export class ListNftDTO {
  //TODO - Mapear tags e criar uma interface
  @ApiProperty()
  tags: Array<string>;

  @ApiProperty()
  page: number;

  @ApiProperty()
  user_id: number;
}
