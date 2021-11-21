import { ApiProperty } from '@nestjs/swagger';

export class FavoriteNftDto {
  @ApiProperty()
  nft_id: number;

  @ApiProperty()
  user_id: number;
}
