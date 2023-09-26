import { Artist } from '../artists/Artists.types';
import { Pager, Region } from '../common/Common.types';
import { Track } from '../tracks/Track.types';

export type Album = {
  id: number;
  title: string;
  type?: AlbumType;
  metaType: AlbumMetaType;
  contentWarning?: AlbumContentWarning;
  releaseDate?: string;
  year?: number;
  coverUri?: string;
  ogImage?: string;
  genre: string;
  trackCount: number;
  likesCount?: number;
  recent?: boolean;
  veryImportant?: boolean;
  artists?: Artist[];
  labels?: AlbumLabel[];
  available?: boolean;
  availableForPremiumUsers?: boolean;
  disclaimers?: string[];
  availableForMobile?: boolean;
  availablePartially?: boolean;
  availableForOptions?: string[];
  bests?: number[];
  duplicates?: Album[];
  regions?: Region[];
  availableRegions?: string[];
  error?: string;
};

export type AlbumWithTrackPosition = Album & {
  /**
   * Track position
   */
  trackPosition?: AlbumTrackPosition;
};

export type AlbumWithTracks = Album & {
  sortOrder: AlbumSortOrder;
  volumes: AlbumVolume[];
  pager: Pager;
};

export type AlbumVolume = Track[];

export type AlbumSortOrder = 'asc' | 'desc';

export type AlbumType =
  | 'single'
  | 'podcast'
  | 'audiobook'
  | 'compilation'
  | string;

export type AlbumMetaType = 'music' | 'single' | 'podcast' | string;

export type AlbumContentWarning = 'explicit' | string;

export type AlbumLabel = {
  id: number;
  name: string;
};

export type AlbumTrackPosition = {
  volume: number;
  index: number;
};
