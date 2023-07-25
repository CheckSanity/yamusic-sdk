import { Playlist } from '../playlists/Playlists.types';
import { Artist } from '../artists/Artists.types';

export type User = {
  /**
   * Unique ID
   *
   * @example 132111868
   */
  uid: number;

  /**
   * Login, usually based on email
   *
   * @example "some_login"
   */
  login?: string;

  /**
   * Name, // TODO Difference between fullName?
   *
   * @example "John Doe"
   */
  name?: string;

  /**
   * Full name
   *
   * @example "John Doe"
   */
  fullName?: string;

  /**
   * Display name
   *
   * @example "John Doe"
   */
  displayName?: string;

  /**
   * Verified // TODO Description
   */
  verified?: boolean;

  /**
   * Statistics
   */
  statistics?: UserStatistics;
};

export type UserStatistics = {
  /**
   * Number of liked users
   */
  likedUsers: number;

  /**
   * Number of users liked by
   */
  likedByUsers: number;

  /**
   * Has tracks?
   */
  hasTracks: boolean;

  /**
   * Number of liked artists
   */
  likedArtists: number;

  /**
   * Number of liked albums
   */
  likedAlbums: number;

  /**
   * // TODO ???
   */
  ugcTracks: number;

  // TODO socialProfiles[]
};

export type UserPlaylist = Playlist;

export type UserLikedPlaylist = {
  /**
   * Liked playlist
   */
  playlist: Playlist;

  /**
   * Date and time when liked
   *
   * @example "2021-08-31T15:40:15+00:00"
   */
  timestamp: string;
};

export type UserLikedArtist = Artist;

export type UserLikedAlbum = {
  /**
   * Album ID
   */
  id: number;

  /**
   * Date and time when liked
   *
   * @example "2021-08-31T15:40:15+00:00"
   */
  timestamp: string;
};

export type UserLikedTracks = {
  library: {
    /**
     * User ID
     */
    uid: number;

    /**
     * Revision
     */
    revision: number;

    /**
     * UUID
     */
    playlistUuid: string;

    /**
     * List of tracks
     */
    tracks: UserLikedTrack[];
  };
};

export type UserLikedTrack = {
  /**
   * Track ID
   */
  id: number;

  /**
   * Album ID
   */
  albumId: number;

  /**
   * Date and time when liked
   *
   * @example "2021-08-31T15:40:15+00:00"
   */
  timestamp: string;
};
