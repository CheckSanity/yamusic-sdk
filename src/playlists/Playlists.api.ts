import { BaseApi } from '../BaseApi';
import { PlaylistRecommendations, PlaylistWithTracks } from './Playlists.types';

export class PlaylistsApi extends BaseApi {
  public playlist(uid: number, kind: number): Promise<PlaylistWithTracks> {
    return this.getRequest<PlaylistWithTracks>(
      `users/${uid}/playlists/${kind}`,
    );
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
