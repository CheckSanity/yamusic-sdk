import { BaseApi } from '../BaseApi';
import {
  Playlist,
  PlaylistRecommendations,
  PlaylistVisibility,
  PlaylistWithTracks,
} from './Playlists.types';

export class PlaylistsApi extends BaseApi {
  public createPlaylist(
    uid: number,
    title: string,
    visibility: PlaylistVisibility,
  ) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('visibility', visibility);

    return this.postRequest<Playlist>(`users/${uid}/playlists/create`, {
      formData: formData,
    });
  }

  public deletePlaylist(uid: number, kind: number): Promise<string> {
    return this.postRequest(`users/${uid}/playlists/${kind}/delete`);
  }

  public updatePlaylistName(
    uid: number,
    kind: number,
    newName: string,
  ): Promise<Playlist> {
    const formData = new FormData();
    formData.append('value', newName);

    return this.postRequest<Playlist>(`users/${uid}/playlists/${kind}/name`, {
      formData: formData,
    });
  }

  public updatePlaylistVisibility(
    uid: number,
    kind: number,
    newVisibility: PlaylistVisibility,
  ): Promise<Playlist> {
    const formData = new FormData();
    formData.append('value', newVisibility);

    return this.postRequest<Playlist>(
      `users/${uid}/playlists/${kind}/visibility`,
      {
        formData: formData,
      },
    );
  }

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
