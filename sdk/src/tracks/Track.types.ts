import { Artist } from '../artists/Artists.types';
import { AlbumWithTrackPosition } from '../albums/Albums.types';
import { Region } from '../common/Common.types';

export type Track = {
  id: number | string;
  realId?: number | string;
  title: string;
  version?: string;
  contentWarning?: string;
  trackSource: TrackSource;
  major?: TrackMajor;
  available?: boolean;
  availableForPremiumUsers?: boolean;
  availableFullWithoutPermission?: boolean;
  disclaimers?: string[];
  availableForOptions?: string[];
  durationMs: number;
  storageDir?: string;
  fileSize?: number;
  r128?: TrackR128;
  fade?: TrackFade;
  previewDurationMs: number;
  artists: Artist[];
  albums: AlbumWithTrackPosition[];
  coverUri?: string;
  ogImage?: string;
  lyricsAvailable?: boolean;
  lyricsInfo?: TrackLyricsInfo;
  derivedColors?: DerivedColors;
  type: TrackType;
  rememberPosition?: boolean;
  backgroundVideoUri?: string;
  trackSharingFlag?: TrackSharingFlag;
  playerId?: string;
  specialAudioResources?: string[];
  error?: string;
  regions?: Region[];
};

export type DerivedColors = {
  average: string;
  waveText: string;
  miniPlayer: string;
  accent: string;
};

export type SimilarTracks = {
  track: Track;
  similarTracks: Track[];
};

export type TrackSupplement = {
  id: number;
  lyrics: TrackLyrics;
};

export type TrackLyrics = {
  id: number;
  lyrics: string;
  fullLyrics: string;
  hasRights: boolean;
  textLanguage: LyricsLanguage;
  showTranslation: boolean;
};

export type TrackDownloadInfo = {
  codec: TrackCodec;
  gain: boolean;
  preview: boolean;
  downloadInfoUrl: string;
  direct: boolean;
  bitrateInKbps: number;
};

export type TrackCodec = 'mp3' | string;

export type LyricsLanguage = 'en' | string;

export type TrackSource = 'OWN' | string;

export type TrackMajor = {
  id: number;
  name: string;
};

export type TrackR128 = {
  i: number;
  tp: number;
};

export type TrackFade = {
  inStart: number;
  inStop: number;
  outStart: number;
  outStop: number;
};

export type TrackLyricsInfo = {
  hasAvailableSyncLyrics: boolean;
  hasAvailableTextLyrics: boolean;
};

export type TrackType = 'music' | string;

export type TrackSharingFlag = 'VIDEO_ALLOWED' | 'COVER_ONLY' | string;
