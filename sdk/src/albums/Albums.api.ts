import { BaseApi } from '../BaseApi';
import { Album, AlbumWithTracks } from './Albums.types';

export class AlbumsApi extends BaseApi {
  public album(args: { uid: number | string }): Promise<Album> {
    return this.getRequest<Album>(`albums/${args.uid}`);
  }

  public albums(args: { uid: (number | string)[] }): Promise<Album[]> {
    return this.getRequest<Album[]>(`albums`, {
      query: {
        albumIds: args.uid.toString(),
      },
    });
  }

  public albumWithTracks(args: {
    uid: number | string;
  }): Promise<AlbumWithTracks> {
    return this.getRequest<AlbumWithTracks>(`albums/${args.uid}/with-tracks`);
  }
}
