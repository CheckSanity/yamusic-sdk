import { PlaylistWithTrackIds } from '../playlists/Playlists.types';

export type GeneratedPlaylistLandingBlock = {
  notify: boolean;
  ready: boolean;
  type: string; //playlistOfTheDay
  data: PlaylistWithTrackIds;
};
