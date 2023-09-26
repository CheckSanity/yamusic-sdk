import { ArtistDetailed } from '../artists/Artists.types';
import { Track } from '../tracks/Track.types';
import { Playlist } from '../playlists/Playlists.types';
import { Album } from '../albums/Albums.types';

export type Search = {
  type: SearchType;
  page: number;
  perPage: number;
  text: string;
  searchRequestId: string;
  artists?: SearchResult<ArtistDetailed>;
  playlists?: SearchResult<Playlist>;
  tracks?: SearchResult<Track>;
  albums?: SearchResult<Album>;
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

export type SearchSuggest = {
  /**
   * Best match
   */
  best: {
    type: SearchType;
    text: string;
    result: ArtistDetailed | Playlist | Track | Album;
  };

  /**
   * List of suggestion
   */
  suggestions: string[];
};
