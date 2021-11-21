import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { FavoriteNftRepository } from './favorite/favorite-nft.repository';
import { NftController } from './nft.controller';
import { NftRepository } from './nft.repository';
import { NftService } from './nft.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NftRepository,
      FavoriteNftRepository,
      UserRepository,
    ]),
  ],
  controllers: [NftController],
  providers: [NftService],
})
export class NftModule {}
