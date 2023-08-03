import { YaMusicSDK } from '../YaMusicSDK';
import {
  buildIntegrationTestSdkInstance,
  FetchApiSpy,
} from '../test/YaMusicSdk.builder';

describe('Genres API', () => {
  let sdk: YaMusicSDK;
  let fetchSpy: FetchApiSpy;

  beforeEach(() => {
    [sdk, fetchSpy] = buildIntegrationTestSdkInstance();
  });

  it('get genres should return genres', async () => {
    const result = await sdk.genres.genres();

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/genres`,
    );

    expect(result.length).toBeGreaterThan(0);
  });

  it('get genres with language should return genres ', async () => {
    const result = await sdk.genres.genres({ language: 'en' });

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/genres?language=en`,
    );

    expect(result.length).toBeGreaterThan(0);
  });
});
