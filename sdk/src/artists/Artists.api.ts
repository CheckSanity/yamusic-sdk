import { BaseApi } from '../BaseApi';
import {
  ArtistAlbums,
  ArtistDetailed,
  ArtistResponse,
  ArtistTracks,
} from './Artists.types';

export class ArtistsApi extends BaseApi {
  public artist(args: { uid: number | string }): Promise<ArtistResponse> {
    return this.getRequest<ArtistResponse>(`artists/${args.uid}`);
  }

  public artists(args: {
    uid: (number | string)[];
  }): Promise<ArtistDetailed[]> {
    return this.getRequest<ArtistDetailed[]>(`artists`, {
      query: {
        artistIds: args.uid.toString(),
      },
    });
  }

  public artistTracks(args: {
    uid: number | string;
    page?: number;
    pageSize?: number;
  }): Promise<ArtistTracks> {
    return this.getRequest<ArtistTracks>(`artists/${args.uid}/tracks`, {
      query: {
        page: args.page,
        pageSize: args.pageSize,
      },
    });
  }

  public artistAlbums(args: {
    uid: number | string;
    page?: number;
    pageSize?: number;
  }): Promise<ArtistAlbums> {
    return this.getRequest<ArtistAlbums>(`artists/${args.uid}/direct-albums`, {
      query: {
        page: args.page,
        pageSize: args.pageSize,
      },
    });
  }
}
