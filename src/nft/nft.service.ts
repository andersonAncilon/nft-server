import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { NftRepository } from './nft.repository';
import { CreateNftDto } from './DTO/create-nft-dto';
import { FavoriteNftDto } from './DTO/favorite-nft-dto';
import { ListNftDTO } from './DTO/list-nfts-dto';
import { NFT } from './nft.entity';
import { FavoriteNft } from './favorite/favorite-nft.entity';
import { FavoriteNftRepository } from './favorite/favorite-nft.repository';
import { GetNftDetailsDto } from './DTO/get-nft-details';
import { formatNftListReturn } from 'src/shared/util/FormatNftReturn';
import { wasNftFavoritedByUser } from 'src/shared/util/WasNftFavoritedByUser';

@Injectable()
export class NftService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly nftRepository: NftRepository,
    private readonly favoriteNftRepository: FavoriteNftRepository,
  ) {}
  async listNfts(listNftDTO: ListNftDTO) {
    //TODO - Adicionar filtros e paginação
    const { tags, page } = listNftDTO;
    const nfts = await this.nftRepository.find({
      relations: [
        'favorite_history',
        'author',
        'favorite_history.favorited_by',
        'favorite_history.favorite_nft',
      ],
    });

    return formatNftListReturn(nfts);
  }

  async createNft(createNftDto: CreateNftDto) {
    //TODO - Internacionalizar retornos
    const { name, description, image, user_id, tags, value } = createNftDto;

    const user = await this.userRepository.findOne({
      where: {
        id: user_id,
      },
    });

    if (user) {
      try {
        const nft = new NFT(
          name,
          description,
          image,
          user,
          tags.join('|'),
          value,
        );
        await nft.save();
      } catch (error) {
        throw new BadRequestException({
          success: false,
          developerMessage: error,
        });
      }
      return {
        success: true,
        message: 'Nft criado com sucesso!',
      };
    }
    throw new NotFoundException({
      success: false,
      message: 'Usuário não encontrado!',
    });
  }

  async favoriteNft(favoriteNftDto: FavoriteNftDto) {
    const { nft_id, user_id } = favoriteNftDto;
    const nft = await this.nftRepository.findOne({
      id: nft_id,
    });

    if (nft) {
      const user = await this.userRepository.findOne({
        where: {
          id: user_id,
        },
      });
      if (!user)
        throw new NotFoundException({
          success: false,
          message: 'Usuário não encontrado',
        });
      try {
        const alreadyFavorite = await this.favoriteNftRepository.findOne({
          where: {
            favorited_by: {
              id: user_id,
            },
            favorite_nft: {
              id: nft_id,
            },
          },
        });
        if (alreadyFavorite) {
          try {
            await alreadyFavorite.remove();
            nft.favorite_count -= 1;
            await nft.save();
          } catch (error) {
            return {
              success: false,
              message: 'Erro ao remover favorito!',
              developerMessage: error.toString(),
            };
          }
          return {
            success: true,
            message: 'Sucesso ao remover favorito!',
          };
        }
        const favoriteNft = new FavoriteNft(user, nft);
        await favoriteNft.save();
        nft.favorite_count += 1;
        await nft.save();
      } catch (error) {
        return {
          success: false,
          message: 'Erro ao salvar favorito!',
          developerMessage: error.toString(),
        };
      }
      return {
        success: true,
        message: 'Sucesso ao adicionar favorito!',
      };
    }
    throw new NotFoundException({
      success: false,
      message: 'NFT não encontrado',
    });
  }

  async getNftDetails(getNftDetailsDto: GetNftDetailsDto) {
    const { nftId, userId } = getNftDetailsDto;
    try {
      const nft = await this.nftRepository.findOne({
        where: {
          id: nftId,
        },
        relations: [
          'favorite_history',
          'favorite_history.favorited_by',
          'favorite_history.favorite_nft',
        ],
      });
      if (!nft)
        throw new NotFoundException({
          success: false,
          message: 'NFT não encontrado!',
        });
      //TODO - Remover mock
      nft.last_bid = parseFloat((Math.random() * 100).toFixed(2));
      nft.favorite = wasNftFavoritedByUser(
        nft.favorite_history,
        userId,
        nft.id,
      );
      delete nft.favorite_history;
      return {
        success: true,
        nft,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Falha ao buscar NFT!',
        developerMessage: error.toString(),
      };
    }
  }
}
