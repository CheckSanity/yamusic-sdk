import { Artist } from '../artists/Artists.types';
import { Track } from '../tracks/Track.types';
import { Playlist } from '../playlists/Playlists.types';
import { BaseAlbum } from '../albums/Albums.types';

export type Search = {
  type: SearchType;
  page: number;
  perPage: number;
  text: string;
  searchRequestId: string;
  artists?: SearchResult<Artist>;
  playlists?: SearchResult<Playlist>;
  tracks?: SearchResult<Track>;
  albums?: SearchResult<BaseAlbum>;
  // TODO Podcasts podcasts?: [];
  // TODO Users unknown users?: [];
};

export type SearchResult<T> = {
  total: number;
  perPage: number;
  order: number;
  results: T[];
};

export type SearchType =
  | 'track'
  | 'artist'
  | 'playlist'
  | 'album'
  //| 'user'
  //| 'podcast'
  | string;
