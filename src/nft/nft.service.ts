import { Injectable } from '@nestjs/common';
import { ListNftDTO } from './DTO/list-nfts-dto';
import { list } from './mock/NftList';

@Injectable()
export class NftService {
  async listNfts(listNftDTO: ListNftDTO) {
    return list;
  }
}
