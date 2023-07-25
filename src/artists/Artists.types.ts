import { Cover, CustomWave } from '../common/Common.types';
import { BaseAlbum } from '../albums/Albums.types';
import { Track } from '../tracks/Track.types';

export type BaseArtist = {
  /**
   * Artist ID
   *
   * @example '3121'
   */
  id: string;

  /**
   * Artist name
   *
   * @example 'Metallica
   */
  name: string;

  /**
   * Is various?
   *
   */
  various: boolean;

  /**
   * Is composer?
   */
  composer: boolean;

  /**
   * Artist cover image
   */
  cover?: Cover;

  /**
   * Artist OpenGraph image URL
   */
  ogImage?: string;

  /**
   * Artist genres
   *
   * @example ['thrashmetal']
   */
  genres: string[];

  /**
   * TODO ??
   */
  disclaimers: string[];
};

export type Artist = BaseArtist & {
  /**
   * Artist album and tracks counts
   */
  counts: ArtistCounts;

  /**
   * Is available?
   */
  available: boolean;

  /**
   * Artist ratings
   */
  ratings?: ArtistRatings;

  /**
   * Artist links
   */
  links: ArtistLink[];

  /**
   * Is tickets available?
   */
  ticketsAvailable?: boolean;

  /**
   * Likes count
   */
  likesCount?: number;

  /**
   * Database aliases
   */
  dbAliases?: string[];
};

export type ArtistDetailed = {
  artist: Artist;
  albums: BaseAlbum[];
  alsoAlbums: BaseAlbum[];
  lastReleaseIds: number[];
  popularTracks: Track[];
  // TODO bandlinkScannerLink
  similarArtists: Artist[];
  allCovers: Cover[];
  // TODO concerts
  videos: ArtistVideo[];
  // TODO "clips": [],
  // TODO "vinyls": [],
  hasPromotions?: boolean;
  // TODO lastReleases: [];
  backgroundVideoUrl?: string;
  customWave?: CustomWave;
  /**
   * If present, then probably fields not available
   */
  error?: string;
};

export type ArtistCounts = {
  tracks: number;
  directAlbums: number;
  alsoAlbums: number;
  alsoTracks: number;
};

export type ArtistRatings = {
  week: number;
  month: number;
  day: number;
};

export type ArtistLink = {
  /**
   * Title
   *
   * @example 'metallicatv'
   */
  title: string;

  /**
   * URL
   *
   * @example 'http://www.youtube.com/metallicatv'
   */
  href: string;

  /**
   * Type
   */
  type: ArtistLinkType;

  /**
   * Social network name
   */
  socialNetwork?: ArtistSocialNetwork;
};

export type ArtistLinkType = 'social' | 'official' | string;

export type ArtistSocialNetwork =
  | 'youtube'
  | 'twitter'
  | 'tiktok'
  | 'vk'
  | 'telegram'
  | string;

export type ArtistVideo = {
  title: string;
  cover: string;
  embedUrl: string;
  provider: ArtistVideoProvider;
  providerVideoId: string;
};

export type ArtistVideoProvider = 'yandex' | string;
