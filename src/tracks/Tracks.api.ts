import { BaseApi } from '../BaseApi';
import {
  SimilarTracks,
  Track,
  TrackDownloadInfo,
  TrackSupplement,
} from './Track.types';

export class TracksApi extends BaseApi {
  public track(uid: number): Promise<Track> {
    return this.getRequest<Track>(`tracks/${uid}`);
  }

  public tracks(uid: number[]): Promise<Track[]> {
    return this.getRequest<Track[]>(`tracks?trackIds=${uid}`);
  }

  public similar(uid: number): Promise<SimilarTracks> {
    return this.getRequest<SimilarTracks>(`tracks/${uid}/similar`);
  }

  public supplement(uid: number): Promise<TrackSupplement> {
    return this.getRequest<TrackSupplement>(`tracks/${uid}/supplement`);
  }

  public downloadInfo(uid: number): Promise<TrackDownloadInfo[]> {
    return this.getRequest<TrackDownloadInfo[]>(`tracks/${uid}/download-info`);
  }
}
