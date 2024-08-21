import { BaseApi } from '../BaseApi';
import {
  User,
  UserLikedAlbum,
  UserLikedArtist,
  UserLikedPlaylist,
  UserLikedTracks,
  UserPlaylist,
} from './User.types';
import {
  PlaylistWithTrackIds,
  PlaylistWithTracks,
} from '../playlists/Playlists.types';

export class UsersApi extends BaseApi {
  public info(args: { loginOrId: string | number }): Promise<User> {
    return this.getRequest<User>(`users/${args.loginOrId}`);
  }

  public playlists(args: {
    loginOrId: string | number;
  }): Promise<UserPlaylist[]> {
    return this.getRequest<UserPlaylist[]>(
      `users/${args.loginOrId}/playlists/list`,
    );
  }

  public playlist(args: {
    loginOrId: number | string;
    kind: number | string;
  }): Promise<PlaylistWithTracks> {
    return this.getRequest<PlaylistWithTracks>(
      `users/${args.loginOrId}/playlists/${args.kind}`,
    );
  }

  public playlistsByIds(args: {
    loginOrId: string | number;
    kinds: (number | string)[];
  }): Promise<PlaylistWithTrackIds[]> {
    return this.getRequest<PlaylistWithTrackIds[]>(
      `users/${args.loginOrId}/playlists`,
      { query: { kinds: args.kinds.toString() } },
    );
  }

  public likedPlaylists(args: {
    loginOrId: string | number;
  }): Promise<UserLikedPlaylist[]> {
    return this.getRequest<UserLikedPlaylist[]>(
      `users/${args.loginOrId}/likes/playlist`,
    );
  }

  public likedArtists(args: {
    loginOrId: string | number;
  }): Promise<UserLikedArtist[]> {
    return this.getRequest<UserLikedArtist[]>(
      `users/${args.loginOrId}/likes/artists`,
    );
  }

  public likedAlbums(args: {
    loginOrId: string | number;
  }): Promise<UserLikedAlbum[]> {
    return this.getRequest<UserLikedAlbum[]>(
      `users/${args.loginOrId}/likes/albums`,
    );
  }

  public likedTracks(args: {
    loginOrId: string | number;
  }): Promise<UserLikedTracks> {
    return this.getRequest<UserLikedTracks>(
      `users/${args.loginOrId}/likes/tracks`,
    );
  }
}
