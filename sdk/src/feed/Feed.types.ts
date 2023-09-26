import { Track } from '../tracks/Track.types';
import { Album } from '../albums/Albums.types';
import { ArtistDetailed } from '../artists/Artists.types';
import { GeneratedPlaylistLandingBlock } from '../landing/Landing.types';

export type FeedResponse = {
  nextRevision: string;
  canGetMoreEvents?: boolean;
  pumpkin?: boolean;
  isWizardPassed?: boolean;
  today: string;
  days: {
    day: string;
    events: {
      id: string;
      type: string;
      typeForFrom: string;
      title?: { type: string; text: string; name: string }[];
      genre?: string;
      radioIsAvailable?: boolean;
      tracks?: Track[];
      albums?: Album[];
      artist?: ArtistDetailed;
      artistsWithArtistsFromHistory?: {
        artist: ArtistDetailed;
        artistsFromHistory: ArtistDetailed[];
      }[];
      similarArtists?: { subscribed: boolean; artist: ArtistDetailed }[];
      similarToArtist?: ArtistDetailed;
      similarToGenre?: string;
      similarGenre?: string;
    }[];
    trackToPlay?: Track[];
    tracksToPlayWithAds?: { type: string; track: Track }[];
    generatedPlaylists?: GeneratedPlaylistLandingBlock[];
    headlines?: unknown[]; // TODO
  }[];
};
