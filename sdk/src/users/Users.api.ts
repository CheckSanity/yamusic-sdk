import { BaseApi } from '../BaseApi';
import {
  User,
  UserLikedAlbum,
  UserLikedArtist,
  UserLikedPlaylist,
  UserLikedTracks,
  UserPlaylist,
} from './User.types';
import { PlaylistWithTrackIds } from '../playlists/Playlists.types';

export class UsersApi extends BaseApi {
  public info(args: { login: string }): Promise<User> {
    return this.getRequest<User>(`users/${args.login}`);
  }

  public playlists(args: { login: string }): Promise<UserPlaylist[]> {
    return this.getRequest<UserPlaylist[]>(
      `users/${args.login}/playlists/list`,
    );
  }

  public playlistsByIds(args: {
    login: string;
    playlistIds: string[];
  }): Promise<PlaylistWithTrackIds[]> {
    return this.getRequest<PlaylistWithTrackIds[]>(
      `users/${args.login}/playlists`,
      { query: { kinds: args.playlistIds.toString() } },
    );
  }

  public likedPlaylists(args: { login: string }): Promise<UserLikedPlaylist[]> {
    return this.getRequest<UserLikedPlaylist[]>(
      `users/${args.login}/likes/playlist`,
    );
  }

  public likedArtists(args: { login: string }): Promise<UserLikedArtist[]> {
    return this.getRequest<UserLikedArtist[]>(
      `users/${args.login}/likes/artists`,
    );
  }

  public likedAlbums(args: { login: string }): Promise<UserLikedAlbum[]> {
    return this.getRequest<UserLikedAlbum[]>(
      `users/${args.login}/likes/albums`,
    );
  }

  public likedTracks(args: { login: string }): Promise<UserLikedTracks> {
    return this.getRequest<UserLikedTracks>(`users/${args.login}/likes/tracks`);
  }
}
