import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FavoriteNft } from './favorite/favorite-nft.entity';

@Entity()
export class NFT extends BaseEntity {
  constructor(
    name: string,
    description: string,
    image: string,
    author: User,
    tags: string,
    value: number,
  ) {
    super();

    this.name = name;
    this.description = description;
    this.image = image;
    this.author = author;
    this.tags = tags;
    this.value = value;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user: User) => user.authored_in)
  author: User;

  @Column()
  image: string;

  @Column()
  tags: string;

  @Column({ type: 'numeric', precision: 20 })
  value: number;

  @OneToMany(
    () => FavoriteNft,
    (favoriteNft: FavoriteNft) => favoriteNft.favorite_nft,
    { cascade: true },
  )
  favorite_history: FavoriteNft[];

  @Column({ default: 0 })
  favorite_count: number;

  favorite: boolean;

  last_bid: number;
}
