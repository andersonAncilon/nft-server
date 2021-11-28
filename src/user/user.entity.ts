import { FavoriteNft } from 'src/nft/favorite/favorite-nft.entity';
import { NFT } from 'src/nft/nft.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  constructor(address: string, description?: string, profilePicture?: string) {
    super();

    this.address = address;
    this.description = description;
    this.profilePicture = profilePicture;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ default: '' })
  name?: string;

  @Column({ default: 'Describe a little about yourself' })
  description?: string;

  @Column({ default: '' })
  profilePicture?: string;

  @OneToMany(() => NFT, (nft: NFT) => nft.author, { cascade: true })
  authored_in: NFT[];

  @OneToMany(
    () => FavoriteNft,
    (favoriteNft: FavoriteNft) => favoriteNft.favorited_by,
    { cascade: true },
  )
  favorite_nfts: FavoriteNft[];

  balance?: number;
}
