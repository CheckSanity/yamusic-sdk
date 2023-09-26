import { BaseApi } from '../BaseApi';
import {
  User,
  UserLikedAlbum,
  UserLikedArtist,
  UserLikedPlaylist,
  UserLikedTracks,
  UserPlaylist,
} from './User.types';

export class UsersApi extends BaseApi {
  public info(login: string): Promise<User> {
    return this.getRequest<User>(`users/${login}`);
  }

  public playlists(login: string): Promise<UserPlaylist[]> {
    return this.getRequest<UserPlaylist[]>(`users/${login}/playlists/list`);
  }

  public likedPlaylists(login: string): Promise<UserLikedPlaylist[]> {
    return this.getRequest<UserLikedPlaylist[]>(
      `users/${login}/likes/playlist`,
    );
  }

  public likedArtists(login: string): Promise<UserLikedArtist[]> {
    return this.getRequest<UserLikedArtist[]>(`users/${login}/likes/artists`);
  }

  public likedAlbums(login: string): Promise<UserLikedAlbum[]> {
    return this.getRequest<UserLikedAlbum[]>(`users/${login}/likes/albums`);
  }

  public likedTracks(login: string): Promise<UserLikedTracks> {
    return this.getRequest<UserLikedTracks>(`users/${login}/likes/tracks`);
  }
}
