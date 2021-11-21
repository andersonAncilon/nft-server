import { ApiProperty } from '@nestjs/swagger';

export class GetNftDetailsDto {
  @ApiProperty()
  nftId: number;

  @ApiProperty()
  userId: number;
}
