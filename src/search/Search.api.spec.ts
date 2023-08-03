import { YaMusicSDK } from '../YaMusicSDK';
import {
  buildIntegrationTestSdkInstance,
  FetchApiSpy,
} from '../test/YaMusicSdk.builder';

describe('Search API', () => {
  let sdk: YaMusicSDK;
  let fetchSpy: FetchApiSpy;

  beforeEach(() => {
    [sdk, fetchSpy] = buildIntegrationTestSdkInstance();
  });

  it('search artist should return artists', async () => {
    const result = await sdk.search.search({
      text: 'Kasabian',
      type: 'artist',
      page: 1,
    });

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/search?text=Kasabian&type=artist&page=1`,
    );

    expect(result.type).toStrictEqual('artist');
    expect(result.page).toStrictEqual(1);
    expect(result.text).toStrictEqual('Kasabian');
    expect(result.artists).toBeDefined();
    expect(result.artists?.results.length).toBeGreaterThan(0);
  });

  it('search track should return tracks', async () => {
    const result = await sdk.search.search({
      text: 'underdog',
      type: 'track',
      page: 1,
    });

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/search?text=underdog&type=track&page=1`,
    );

    expect(result.type).toStrictEqual('track');
    expect(result.page).toStrictEqual(1);
    expect(result.text).toStrictEqual('underdog');
    expect(result.tracks).toBeDefined();
    expect(result.tracks?.results.length).toBeGreaterThan(0);
  });

  it('search playlist should return playlists', async () => {
    const result = await sdk.search.search({
      text: 'house',
      type: 'playlist',
      page: 1,
    });

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/search?text=house&type=playlist&page=1`,
    );

    expect(result.type).toStrictEqual('playlist');
    expect(result.page).toStrictEqual(1);
    expect(result.text).toStrictEqual('house');
    expect(result.playlists).toBeDefined();
    expect(result.playlists?.results.length).toBeGreaterThan(0);
  });

  it('search album should return albums', async () => {
    const result = await sdk.search.search({
      text: 'Meteora',
      type: 'album',
      page: 1,
    });

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/search?text=Meteora&type=album&page=1`,
    );

    expect(result.type).toStrictEqual('album');
    expect(result.page).toStrictEqual(1);
    expect(result.text).toStrictEqual('Meteora');
    expect(result.albums).toBeDefined();
    expect(result.albums?.results.length).toBeGreaterThan(0);
  });
});
