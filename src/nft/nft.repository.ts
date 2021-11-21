import { EntityRepository, Repository } from 'typeorm';
import { NFT } from './nft.entity';

@EntityRepository(NFT)
export class NftRepository extends Repository<NFT> {}
