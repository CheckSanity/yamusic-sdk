import { YaMusicSDK } from '../YaMusicSDK';
import {
  buildIntegrationTestSdkInstance,
  FetchApiSpy,
} from '../test/YaMusicSdk.builder';

describe('Account API', () => {
  let sdk: YaMusicSDK;
  let fetchSpy: FetchApiSpy;

  beforeEach(() => {
    [sdk, fetchSpy] = buildIntegrationTestSdkInstance();
  });

  it('get account status should return information', async () => {
    const result = await sdk.account.status();

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/account/status`,
    );

    expect(result.account.uid).toBeDefined();
    expect(result.account.login).toBeDefined();
  });

  it('get account settings should return information', async () => {
    const result = await sdk.account.settings();

    expect(fetchSpy.request().input).toBe(
      `https://api.music.yandex.net/account/settings`,
    );

    expect(result.uid).toBeDefined();
    expect(result.shuffleEnabled).toBeDefined();
    expect(result.volumePercents).toBeDefined();
  });
});
