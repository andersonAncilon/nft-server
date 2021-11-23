import { FavoriteNft } from 'src/nft/favorite/favorite-nft.entity';

export function wasNftFavoritedByUser(
  favoriteHistory: FavoriteNft[],
  userId: number,
  nftId: number,
): boolean {
  if (!favoriteHistory.length) return false;
  const alreadyFavorite = favoriteHistory.find(
    (favorite) =>
      favorite.favorited_by?.id == userId && favorite.favorite_nft?.id == nftId,
  );

  if (alreadyFavorite) return true;
  return false;
}
