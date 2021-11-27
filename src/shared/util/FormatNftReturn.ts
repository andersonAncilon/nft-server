import { NFT } from 'src/nft/nft.entity';
import { wasNftFavoritedByUser } from './WasNftFavoritedByUser';

export interface INftItem {
  id: number;
  image: {
    url: string;
    title: string;
  };
  author: {
    name: string;
    image: string;
  };
  currency: string;
  isLiked: boolean;
  likes: number;
  tags: string[];
  value: string;
}

export function formatNftListReturn(nfts: NFT[]): INftItem[] {
  const nftList: INftItem[] = [];
  nfts.map((nft) => {
    const nftItem: INftItem = {
      id: 0,
      image: {
        url: '',
        title: 'string',
      },
      author: {
        name: 'string',
        image: 'string',
      },
      currency: 'string',
      isLiked: false,
      likes: 0,
      tags: [''],
      value: 'string',
    };
    nftItem.author.name = nft.author.name;
    nftItem.author.image = nft.author.profilePicture;
    nftItem.currency = 'ETH';
    nftItem.id = nft.id;
    nftItem.image.url = nft.image;
    nftItem.image.title = nft.name;
    nftItem.likes = nft.favorite_history.length;
    nftItem.isLiked = nft?.favorite_history
      ? wasNftFavoritedByUser(nft.favorite_history, nft.author.id, nft.id)
      : null;
    //TODO - Remover mock
    nft.last_bid = parseFloat((Math.random() * 100).toFixed(2));
    nftItem.tags = nft.tags.split('|');
    nftItem.value = nft.value.toString();
    nftList.push(nftItem);
  });

  return nftList.sort((item1, item2) => item1.id - item2.id);
}
