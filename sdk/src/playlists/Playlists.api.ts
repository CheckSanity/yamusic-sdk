import { BaseApi } from '../BaseApi';
import {
  Playlist,
  PlaylistRecommendations,
  PlaylistVisibility,
  PlaylistWithTracks,
} from './Playlists.types';

export class PlaylistsApi extends BaseApi {
  public async createPlaylist(args: {
    loginOrId: string | number;
    title: string;
    visibility: PlaylistVisibility;
  }) {
    const formData = new FormData();
    formData.append('title', args.title);
    formData.append('visibility', args.visibility);

    return this.postRequest<Playlist>(
      `users/${args.loginOrId}/playlists/create`,
      {
        formData: formData,
      },
    );
  }

  public async deletePlaylist(args: {
    loginOrId: string | number;
    kind: number | string;
  }): Promise<string> {
    return this.postRequest(
      `users/${args.loginOrId}/playlists/${args.kind}/delete`,
    );
  }

  public async updatePlaylistName(args: {
    loginOrId: string | number;
    kind: number | string;
    newName: string;
  }): Promise<Playlist> {
    const formData = new FormData();
    formData.append('value', args.newName);

    return this.postRequest<Playlist>(
      `users/${args.loginOrId}/playlists/${args.kind}/name`,
      {
        formData: formData,
      },
    );
  }

  public async updatePlaylistVisibility(args: {
    loginOrId: string | number;
    kind: number | string;
    newVisibility: PlaylistVisibility;
  }): Promise<Playlist> {
    const formData = new FormData();
    formData.append('value', args.newVisibility);

    return this.postRequest<Playlist>(
      `users/${args.loginOrId}/playlists/${args.kind}/visibility`,
      {
        formData: formData,
      },
    );
  }

  public async playlist(args: {
    loginOrId: string | number;
    kind: number | string;
  }): Promise<PlaylistWithTracks> {
    return this.getRequest<PlaylistWithTracks>(
      `users/${args.loginOrId}/playlists/${args.kind}`,
    );
  }

  public async recommendations(args: {
    loginOrId: string | number;
    kind: number | string;
  }): Promise<PlaylistRecommendations> {
    return this.getRequest<PlaylistRecommendations>(
      `users/${args.loginOrId}/playlists/${args.kind}/recommendations`,
    );
  }
}
