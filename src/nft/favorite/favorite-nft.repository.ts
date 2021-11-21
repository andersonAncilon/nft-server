import { EntityRepository, Repository } from 'typeorm';
import { FavoriteNft } from './favorite-nft.entity';

@EntityRepository(FavoriteNft)
export class FavoriteNftRepository extends Repository<FavoriteNft> {}
