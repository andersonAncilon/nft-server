import { ApiProperty } from '@nestjs/swagger';

export class GetFavoritesDto {
  @ApiProperty()
  user_id: number;
}
