import { Cover, CustomWave, Region, UserInfo } from '../common/Common.types';
import { Track } from '../tracks/Track.types';

export type Playlist = {
  owner: UserInfo;
  playlistUuid: string;
  available?: boolean;
  uid: number;
  kind: number;
  title: string;
  description?: string;
  descriptionFormatted?: string;
  revision: number;
  snapshot: number;
  trackCount: number;
  visibility: PlaylistVisibility;
  collective?: boolean;
  created: string;
  modified: string;
  isBanner?: boolean;
  isPremiere?: boolean;
  backgroundColor?: string;
  textColor?: string;
  image?: string;
  idForFrom?: string;
  everPlayed?: boolean;
  coverWithoutText?: Cover;
  urlPart?: string;
  durationMs: number;
  cover?: Cover;
  ogImage?: string;
  tags?: PlaylistTag[];
  madeFor?: {
    userInfo?: UserInfo;
    type: unknown;
  };
  generatedPlaylistType?: string;
  backgroundVideoUrl?: string;
  backgroundImageUrl?: string;
  likesCount?: number;
  customWave?: CustomWave;
  regions?: Region[];
};

export type PlaylistWithTracks = {
  tracks: PlaylistTrack[];
} & Playlist;

export type PlaylistWithTrackIds = {
  tracks: {
    id: number;
    albumId?: number;
    timestamp: string;
  }[];
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

export type PlaylistTag = {
  id: string;
  value: string;
};

export type PlaylistVisibility = 'public' | 'private';
