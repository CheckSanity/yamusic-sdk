import { BaseApi } from '../BaseApi';
import { PlaylistDetailed, PlaylistRecommendations } from './Playlists.types';

export class PlaylistsApi extends BaseApi {
  public playlist(uid: number, kind: number): Promise<PlaylistDetailed> {
    return this.getRequest<PlaylistDetailed>(`users/${uid}/playlists/${kind}`);
  }

  public recommendations(
    uid: number,
    kind: number,
  ): Promise<PlaylistRecommendations> {
    return this.getRequest<PlaylistRecommendations>(
      `users/${uid}/playlists/${kind}/recommendations`,
    );
  }
}
