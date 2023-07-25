import { BaseArtist } from '../artists/Artists.types';
import { Pager } from '../common/Common.types';
import { Track } from '../tracks/Track.types';

export type BaseAlbum = {
  /**
   * Album ID
   *
   * @example 62234
   */
  id: number;

  /**
   * Album title
   */
  title: string;

  /**
   * Album type
   */
  type?: AlbumType;

  /**
   * Album meta type
   */
  metaType: AlbumMetaType;

  /**
   * Album release date
   *
   * @example '2005-06-13T00:00:00+04:00'
   */
  releaseDate: string;

  /**
   * Album content warning
   */
  contentWarning: AlbumContentWarning;

  /**
   * Album year
   */
  year: number;

  /**
   * Album cover URI
   */
  coverUri: string;

  /**
   * Album OpenGraph URI
   */
  ogImage: string;

  /**
   * Album genre
   */
  genre: string;

  /**
   * Album track count
   */
  trackCount: number;

  /**
   * Is recent?
   */
  recent: boolean;

  /**
   * TODO veryImportant ???
   */
  veryImportant: boolean;

  /**
   * Album artists
   */
  artists: BaseArtist[];

  /**
   * Album labels
   */
  labels: AlbumLabel[];

  /**
   * Is available?
   */
  available: boolean;

  /**
   * Is available for premium users?
   */
  availableForPremiumUsers?: boolean;

  /**
   * TODO disclaimers ???
   */
  disclaimers: string[];

  /**
   * Available for options?
   */
  availableForOptions?: string[];

  /**
   * Available for mobile?
   */
  availableForMobile?: boolean;

  /**
   * Available partially
   */
  availablePartially?: boolean;

  /**
   * Best tracks IDs
   */
  bests: number[];

  /**
   * Album duplicates
   */
  duplicates?: BaseAlbum[];
};

export type AlbumWithTrackPosition = BaseAlbum & {
  /**
   * Track position
   */
  trackPosition: AlbumTrackPosition;
};

export type AlbumWithTracks = BaseAlbum & {
  sortOrder: AlbumSortOrder;
  volumes: AlbumVolume[];
  pager: Pager;
};

export type AlbumVolume = Track[];

export type AlbumSortOrder = 'asc' | 'desc';

export type AlbumType = 'single' | 'compilation' | string;

export type AlbumMetaType = 'music' | string;

export type AlbumContentWarning = 'explicit' | string;

export type AlbumLabel = {
  /**
   * Album label ID
   */
  id: number;

  /**
   * Album label name
   */
  name: string;
};

export type AlbumTrackPosition = {
  volume: number;
  index: number;
};
