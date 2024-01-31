import { BaseApi } from '../BaseApi';
import { Search, SearchSuggest, SearchType } from './Search.types';

export class SearchApi extends BaseApi {
  public search(args: {
    text: string;
    page: number;
    type: SearchType;
    nocorrect?: boolean;
    playlistInBest?: boolean;
  }): Promise<Search> {
    return this.getRequest<Search>(`search`, {
      query: {
        text: args.text,
        page: args.page,
        type: args.type,
        nocorrect: args.nocorrect,
        playlistInBest: args.playlistInBest,
      },
    });
  }

  public searchSuggest(part: string): Promise<SearchSuggest> {
    return this.getRequest<SearchSuggest>(`search/suggest`, {
      query: {
        part: part,
      },
    });
  }
}
