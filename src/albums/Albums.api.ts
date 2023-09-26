import { BaseApi } from '../BaseApi';
import { Album, AlbumWithTracks } from './Albums.types';

export class AlbumsApi extends BaseApi {
  public album(uid: number): Promise<Album> {
    return this.getRequest<Album>(`albums/${uid}`);
  }

  public albums(uid: number[]): Promise<Album[]> {
    return this.getRequest<Album[]>(`albums?albumIds=${uid}`);
  }

  public albumWithTracks(uid: number): Promise<AlbumWithTracks> {
    return this.getRequest<AlbumWithTracks>(`albums/${uid}/with-tracks`);
  }
}
