import { AccountApi } from './account/Account.api';
import DefaultResponseValidator from './utils/ResponseValidator';
import DefaultResponseDeserializer from './utils/ResponseDeserializer';
import { AlbumsApi } from './albums/Albums.api';
import { ArtistsApi } from './artists/Artists.api';
import { PlaylistsApi } from './playlists/Playlists.api';
import { TracksApi } from './tracks/Tracks.api';
import { UsersApi } from './users/Users.api';
import { SearchApi } from './search/Search.api';

export type * from './account/Account.types';
export type * from './albums/Albums.types';
export type * from './artists/Artists.types';
export type * from './common/Common.types';
export type * from './playlists/Playlists.types';
export type * from './search/Search.types';
export type * from './tracks/Track.types';
export type * from './users/User.types';

export type SdkConfig = {
  url: string;
  fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
  token: string;
};

export class YaMusicSDK {
  public account: AccountApi;
  public albums: AlbumsApi;
  public artists: ArtistsApi;
  public playlists: PlaylistsApi;
  public tracks: TracksApi;
  public users: UsersApi;
  public search: SearchApi;

  private configuration: SdkConfig;
  private validator = new DefaultResponseValidator();
  private deserializer = new DefaultResponseDeserializer();

  private constructor(config?: Partial<SdkConfig>) {
    this.configuration = this.initialize(config);

    this.account = new AccountApi(this);
    this.albums = new AlbumsApi(this);
    this.artists = new ArtistsApi(this);
    this.playlists = new PlaylistsApi(this);
    this.tracks = new TracksApi(this);
    this.users = new UsersApi(this);
    this.search = new SearchApi(this);
  }

  public static create(config?: Partial<SdkConfig>): YaMusicSDK {
    return new YaMusicSDK(config);
  }

  public async makeRequest<R>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    body?: unknown,
    contentType?: string,
  ): Promise<R> {
    const token = this.configuration.token;
    const fullUrl = this.configuration.url + url;

    const opts: RequestInit = {
      method: method,
      headers: {
        Authorization: `OAuth ${token}`,
        'Content-Type': contentType ?? 'application/json',
      },
      body: body
        ? typeof body === 'string'
          ? body
          : JSON.stringify(body)
        : undefined,
    };

    const result = await this.configuration.fetch(fullUrl, opts);

    await this.validator.validateResponse(result);
    return this.deserializer.deserialize<R>(result).then((result) => {
      if (!result) {
        throw new Error('Unable to deserialize content');
      }

      return result;
    });
  }

  private initialize(config?: Partial<SdkConfig>) {
    //const isBrowser = typeof window !== 'undefined';
    //const isNode = typeof process === 'object';

    const defaultConfig: SdkConfig = {
      fetch: (req: RequestInfo | URL, init: RequestInit | undefined) =>
        fetch(req, init),
      url: 'https://api.music.yandex.net/',
      token: '',
    };

    return { ...defaultConfig, ...config };
  }
}
