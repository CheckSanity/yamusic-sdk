import { BaseApi } from '../BaseApi';
import {
  Playlist,
  PlaylistRecommendations,
  PlaylistVisibility,
  PlaylistWithTracks,
} from './Playlists.types';

export class PlaylistsApi extends BaseApi {
  public createPlaylist(args: {
    login: number | string;
    title: string;
    visibility: PlaylistVisibility;
  }) {
    const formData = new FormData();
    formData.append('title', args.title);
    formData.append('visibility', args.visibility);

    return this.postRequest<Playlist>(`users/${args.login}/playlists/create`, {
      formData: formData,
    });
  }

  public deletePlaylist(args: {
    login: number | string;
    kind: number | string;
  }): Promise<string> {
    return this.postRequest(
      `users/${args.login}/playlists/${args.kind}/delete`,
    );
  }

  public updatePlaylistName(args: {
    login: number | string;
    kind: number | string;
    newName: string;
  }): Promise<Playlist> {
    const formData = new FormData();
    formData.append('value', args.newName);

    return this.postRequest<Playlist>(
      `users/${args.login}/playlists/${args.kind}/name`,
      {
        formData: formData,
      },
    );
  }

  public updatePlaylistVisibility(args: {
    login: number | string;
    kind: number | string;
    newVisibility: PlaylistVisibility;
  }): Promise<Playlist> {
    const formData = new FormData();
    formData.append('value', args.newVisibility);

    return this.postRequest<Playlist>(
      `users/${args.login}/playlists/${args.kind}/visibility`,
      {
        formData: formData,
      },
    );
  }

  public playlist(args: {
    login: number | string;
    kind: number | string;
  }): Promise<PlaylistWithTracks> {
    return this.getRequest<PlaylistWithTracks>(
      `users/${args.login}/playlists/${args.kind}`,
    );
  }

  public recommendations(args: {
    login: number | string;
    kind: number | string;
  }): Promise<PlaylistRecommendations> {
    return this.getRequest<PlaylistRecommendations>(
      `users/${args.login}/playlists/${args.kind}/recommendations`,
    );
  }
}
