import { BaseArtist } from '../artists/Artists.types';
import { AlbumWithTrackPosition } from '../albums/Albums.types';
import { Region } from '../common/Common.types';

export type Track = {
  /**
   * Track ID
   */
  id: number;

  /**
   * Track real ID
   */
  realId: number;

  /**
   * Track title
   */
  title: string;

  /**
   * Track source
   */
  trackSource: TrackSource;

  /**
   * Track major
   */
  major: TrackMajor;

  /**
   * Is available?
   */
  available: boolean;

  /**
   * Is available for users with subscription?
   */
  availableForPremiumUsers: boolean;

  /**
   * TODO ???
   */
  availableFullWithoutPermission: boolean;

  /**
   * TODO disclaimers ???
   */
  disclaimers: string[];

  /**
   * Availability options
   */
  availableForOptions: string[];

  /**
   * Track duration in milliseconds
   */
  durationMs: number;

  /**
   * TODO storageDir ???
   */
  storageDir: string;

  /**
   * TODO fileSize ???
   */
  fileSize: number;

  /**
   * TODO r128 ???
   */
  r128: TrackR128;

  /**
   * Track fade in and out timings
   */
  fade: TrackFade;

  /**
   * Track for preview duration in milliseconds
   */
  previewDurationMs: number;

  /**
   * List of artists
   */
  artists: BaseArtist[];

  /**
   * List of albums
   */
  albums: AlbumWithTrackPosition[];

  /**
   * Track cover URI
   */
  coverUri: string;

  /**
   * Track OpenGraph image
   */
  ogImage: string;

  /**
   * Is track lyrics available?
   */
  lyricsAvailable: boolean;

  /**
   * Track lyrics info
   */
  lyricsInfo: TrackLyricsInfo;

  /**
   * Track type
   */
  type: TrackType;

  /**
   * TODO rememberPosition ???
   */
  rememberPosition: boolean;

  /**
   * TODO trackSharingFlag ??
   */
  trackSharingFlag: TrackSharingFlag;

  /**
   * If present, then probably fields not available
   */
  error?: string;

  /**
   * TODO regions
   */
  regions: Region[];
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
  /**
   * Major ID
   */
  id: number;

  /**
   * Major name
   */
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
