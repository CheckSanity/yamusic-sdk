import { BaseApi } from '../BaseApi';
import { ArtistAlbums, ArtistDetailed, ArtistTracks } from './Artists.types';

export class ArtistsApi extends BaseApi {
  public artist(uid: number): Promise<ArtistDetailed> {
    return this.getRequest<ArtistDetailed>(`artists/${uid}`);
  }

  public artists(uid: number[]): Promise<ArtistDetailed[]> {
    return this.getRequest<ArtistDetailed[]>(`artists?artistIds=${uid}`);
  }

  public artistTracks(uid: number): Promise<ArtistTracks> {
    return this.getRequest<ArtistTracks>(`artists/${uid}/tracks`);
  }

  public artistAlbums(uid: number): Promise<ArtistAlbums> {
    return this.getRequest<ArtistAlbums>(`artists/${uid}/direct-albums`);
  }
}
