import { BaseApi } from '../BaseApi';
import { ArtistDetailed } from './Artists.types';

export class ArtistsApi extends BaseApi {
  public artist(uid: number): Promise<ArtistDetailed> {
    return this.getRequest<ArtistDetailed>(`artists/${uid}`);
  }

  public artists(uid: number[]): Promise<ArtistDetailed[]> {
    return this.getRequest<ArtistDetailed[]>(`artists?artistIds=${uid}`);
  }
}
