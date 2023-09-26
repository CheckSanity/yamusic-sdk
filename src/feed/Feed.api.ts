import { BaseApi } from '../BaseApi';
import { FeedResponse } from './Feed.types';

export class FeedApi extends BaseApi {
  public feed(): Promise<FeedResponse> {
    return this.getRequest<FeedResponse>(`feed`);
  }

  // TODO Feed wizard is passed
}
