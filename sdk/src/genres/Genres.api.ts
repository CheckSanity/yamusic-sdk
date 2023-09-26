import { BaseApi } from '../BaseApi';
import { Genre } from './Genres.types';
import * as querystring from 'querystring';

export class GenresApi extends BaseApi {
  public genres(params?: { language?: string }): Promise<Genre[]> {
    return this.getRequest<Genre[]>(
      `genres${params ? `?${querystring.stringify(params)}` : ''}`,
    );
  }
}
