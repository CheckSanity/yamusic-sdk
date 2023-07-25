import { BaseApi } from '../BaseApi';
import { AlbumWithTracks, BaseAlbum } from './Albums.types';

export class AlbumsApi extends BaseApi {
  public album(uid: number): Promise<BaseAlbum> {
    return this.getRequest<BaseAlbum>(`albums/${uid}`);
  }

  public albums(uid: number[]): Promise<BaseAlbum[]> {
    return this.getRequest<BaseAlbum[]>(`albums?albumIds=${uid}`);
  }

  public albumWithTracks(uid: number): Promise<AlbumWithTracks> {
    return this.getRequest<AlbumWithTracks>(`albums/${uid}/with-tracks`);
  }
}
