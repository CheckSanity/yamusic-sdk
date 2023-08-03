import { BaseApi } from '../BaseApi';
import { Search, SearchType } from './Search.types';
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
}
