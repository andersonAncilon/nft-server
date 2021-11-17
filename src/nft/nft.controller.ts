import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListNftDTO } from './DTO/list-nfts-dto';
import { NftService } from './nft.service';

@ApiTags('NFT')
@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}
  @Get('list/:tags/:page')
  async listNfts(@Param() listNftDTO: ListNftDTO) {
    return await this.nftService.listNfts(listNftDTO);
  }
}
