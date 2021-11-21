import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NFT } from '../nft.entity';

@Entity()
export class FavoriteNft extends BaseEntity {
  constructor(favorited_by: User, favorite_nft: NFT) {
    super();

    this.favorited_by = favorited_by;
    this.favorite_nft = favorite_nft;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user: User) => user.favorite_nfts)
  favorited_by: User;

  @ManyToOne(() => NFT, (nft: NFT) => nft.favorite_history)
  favorite_nft: NFT;

  @Column({ default: new Date() })
  timestamp: Date;
}
