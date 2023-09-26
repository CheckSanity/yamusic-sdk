import {
  Cover,
  CustomWave,
  Pager,
  Region,
  VideoSupplement,
} from '../common/Common.types';
import { Album } from '../albums/Albums.types';
import { Track } from '../tracks/Track.types';

export type Artist = {
  id: number;
  name: string;
  various?: boolean;
  composer?: boolean;
  cover?: Cover;
  genres?: string[];
  counts: ArtistCounts;
  disclaimers?: string[];
  dbAliases?: string[];
  likesCount?: number;
  error?: string;
  regions?: Region[];
};

export type ArtistDetailed = Artist & {
  ogImage?: string;
  ratings: ArtistRatings;
  links: ArtistLink[];
  ticketsAvailable?: boolean;
};

export type ArtistResponse = {
  artist: ArtistDetailed;
  albums: Album[];
  alsoAlbums?: Album[];
  lastReleaseIds?: number[];
  popularTracks?: Track[];
  bandlinkScannerLink?: unknown;
  similarArtists?: Artist[];
  allCovers?: Cover[];
  concerts?: unknown[];
  videos?: VideoSupplement[];
  clips?: unknown[];
  vinyls?: unknown[];
  hasPromotions?: boolean;
  lastReleases?: unknown[];
  backgroundVideoUrl?: string;
  customWave?: CustomWave;
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
  title: string;
  href: string;
  type: ArtistLinkType;
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

export type ArtistTracks = {
  pager: Pager;
  tracks: Track[];
};

export type ArtistAlbums = {
  pager: Pager;
  albums: Album[];
};
