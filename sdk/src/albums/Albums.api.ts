import { BaseApi } from '../BaseApi';
import { Album, AlbumWithTracks } from './Albums.types';

export class AlbumsApi extends BaseApi {
  public async album(args: { uid: number | string }): Promise<Album> {
    return this.getRequest<Album>(`albums/${args.uid}`);
  }

  public async albums(args: { uid: (number | string)[] }): Promise<Album[]> {
    return this.getRequest<Album[]>(`albums`, {
      query: {
        albumIds: args.uid.toString(),
      },
    });
  }

  public async albumWithTracks(args: {
    uid: number | string;
  }): Promise<AlbumWithTracks> {
    return this.getRequest<AlbumWithTracks>(`albums/${args.uid}/with-tracks`);
  }
}
