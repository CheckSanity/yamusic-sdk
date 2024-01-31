import { BaseApi } from '../BaseApi';
import {
  SimilarTracks,
  Track,
  TrackDownloadInfo,
  TrackSupplement,
} from './Track.types';

export class TracksApi extends BaseApi {
  public track(args: { uid: number | string }): Promise<Track> {
    return this.getRequest<Track>(`tracks/${args.uid}`);
  }

  public tracks(args: { uid: (number | string)[] }): Promise<Track[]> {
    return this.getRequest<Track[]>(`tracks`, {
      query: {
        trackIds: args.uid.toString(),
      },
    });
  }

  public similar(args: { uid: number | string }): Promise<SimilarTracks> {
    return this.getRequest<SimilarTracks>(`tracks/${args.uid}/similar`);
  }

  public supplement(args: { uid: number | string }): Promise<TrackSupplement> {
    return this.getRequest<TrackSupplement>(`tracks/${args.uid}/supplement`);
  }

  public downloadInfo(args: {
    uid: number | string;
  }): Promise<TrackDownloadInfo[]> {
    return this.getRequest<TrackDownloadInfo[]>(
      `tracks/${args.uid}/download-info`,
    );
  }
}
