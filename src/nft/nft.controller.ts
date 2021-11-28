import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNftDto } from './DTO/create-nft-dto';
import { FavoriteNftDto } from './DTO/favorite-nft-dto';
import { GetNftDetailsDto } from './DTO/get-nft-details';
import { ListNftDTO } from './DTO/list-nfts-dto';
import { NftService } from './nft.service';

@ApiTags('NFT')
@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}
  @Get('list/:tags/:page/:user_id')
  async listNfts(@Param() listNftDTO: ListNftDTO): Promise<any> {
    return await this.nftService.listNfts(listNftDTO);
  }

  @Post('create')
  async createNft(@Body() createNftDto: CreateNftDto) {
    return await this.nftService.createNft(createNftDto);
  }

  @Put('favorite')
  async favoriteNft(@Body() favoriteNftDto: FavoriteNftDto) {
    return await this.nftService.favoriteNft(favoriteNftDto);
  }

  @Get('details/:nftId/:userId')
  async getNftDetails(@Param() getNftDetailsDto: GetNftDetailsDto) {
    return await this.nftService.getNftDetails(getNftDetailsDto);
  }
}
