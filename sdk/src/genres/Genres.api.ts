import { BaseApi } from '../BaseApi';
import { Genre } from './Genres.types';

export class GenresApi extends BaseApi {
  public genres(args?: { language?: string }): Promise<Genre[]> {
    return this.getRequest<Genre[]>(`genres`, {
      query: {
        language: args?.language,
      },
    });
  }
}
