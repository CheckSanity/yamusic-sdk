import { Cover, CustomWave } from '../common/Common.types';
import { Track } from '../tracks/Track.types';

export type Playlist = {
  /**
   * Playlist owner
   */
  owner: PlaylistOwner;

  /**
   * Playlist revision
   *
   * @example "ad453afe-646c-bf73-bff0-46bbacfb5d6d"
   */
  playlistUuid: string;

  /**
   * Is playlist available?
   *
   * @example true
   */
  available: boolean;

  /**
   * Playlist unique ID
   *
   * @example 132111868
   */
  uid: number;

  /**
   * Playlist kind
   *
   * @example 1173
   */
  kind: number;

  /**
   * Playlist title
   *
   * @example '2023: Best'
   */
  title: string;

  /**
   * Playlist description
   *
   */
  description?: string;

  /**
   * Playlist formatted description
   */
  descriptionFormatted?: string;

  /**
   * Playlist revision
   *
   * @example 20
   */
  revision: number;

  /**
   * Playlist snapshot
   *
   * @example 20
   */
  snapshot: number;

  /**
   * Playlist track count
   *
   * @example 20
   */
  trackCount: number;

  /**
   * Playlist visibility
   *
   * @example 'private' or 'public'
   */
  visibility: string;

  /**
   * Is collective playlist?
   *
   * @example false
   */
  collective: boolean;

  /**
   * Playlist creation date
   *
   * @example "2023-07-25T18:56:06+00:00"
   */
  created: string;

  /**
   * Playlist last updated date
   *
   * @example "2023-07-25T18:56:06+00:00"
   */
  modified: string;

  /**
   * Background color
   *
   * @example '#000000'
   */
  backgroundColor?: string;

  /**
   * Text color
   *
   * @example '#000000'
   */
  textColor?: string;

  /**
   * TODO ???
   */
  image?: string;

  /**
   * Playlist revision
   *
   * @example 20
   */
  isBanner: boolean;

  /**
   * Is premiere?
   *
   * @example false
   */
  isPremiere: boolean;

  /**
   * // TODO ???
   *
   * @example 'similar_to_artist'
   */
  idForFrom: string;

  /**
   * Playlist total duration in milliseconds
   *
   * @example 4537980
   */
  durationMs: number;

  /**
   * Playlist cover
   */
  cover: Cover;

  /**
   * Playlist OpenGraph image URL
   *
   * @example 'avatars.yandex.net/get-music-content/33216/b6b4bd6d.a.62234-2/%%'
   */
  ogImage?: string;

  /**
   * Playlist tags
   */
  tags: PlaylistTag[];

  /**
   * Playlist likes count
   */
  likesCount?: number;

  /**
   * Playlist custom wave
   */
  customWave: CustomWave;
};

export type PlaylistDetailed = {
  tracks: PlaylistTrack[];
} & Playlist;

export type PlaylistRecommendations = {
  batchId: string;
  tracks: Track[];
};

export type PlaylistTrack = {
  /**
   * Track ID
   */
  id: number;

  /**
   * Track data
   */
  track: Track;

  /**
   * Track added to playlist date
   *
   * @example "2023-07-25T18:56:06+00:00"
   */
  timestamp: string;

  /**
   * Track original index
   */
  originalIndex: number;

  /**
   * Is recent?
   */
  recent: boolean;
};

export type PlaylistOwner = {
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
  login: string;

  /**
   * Name, // TODO Difference between fullName?
   *
   * @example "John Doe"
   */
  name: string;

  /**
   * User's sex
   *
   * @example 'male', 'unknown'
   */
  sex: string;

  /**
   * Is from verified source?
   * For example if creator of playlist is Yandex.Music
   */
  verified: false;
};

export type PlaylistTag = {
  /**
   * Tag ID
   *
   * @example "5795ce8f77d30f7fda41bca0"
   */
  id: string;

  /**
   * Tag value
   *
   * @example "classics"
   */
  value: string;
};
