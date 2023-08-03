import { BaseApi } from '../BaseApi';
import { Search, SearchSuggest, SearchType } from './Search.types';
import * as querystring from 'querystring';

export class SearchApi extends BaseApi {
  public search(args: {
    text: string;
    page: number;
    type: SearchType;
    nocorrect?: boolean;
    playlistInBest?: boolean;
  }): Promise<Search> {
    return this.getRequest<Search>(`search?${querystring.stringify(args)}`);
  }

  public searchSuggest(part: string): Promise<SearchSuggest> {
    return this.getRequest<SearchSuggest>(`search/suggest?part=${part}`);
  }
}
