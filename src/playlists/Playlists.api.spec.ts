import { YaMusicSDK } from '../YaMusicSDK';
import {
  buildIntegrationTestSdkInstance,
  FetchApiSpy,
} from '../test/YaMusicSdk.builder';

describe('Playlists API', () => {
  let sdk: YaMusicSDK;
  let fetchSpy: FetchApiSpy;

  const uid: number = Number.parseInt(
    process.env.INTEGRATION_TESTS_YANDEX_MUSIC_UID ?? '',
  );

  beforeEach(() => {
    [sdk, fetchSpy] = buildIntegrationTestSdkInstance();
  });

  describe('create and delete playlist', () => {
    it('create private playlist and delete it', async () => {
      const createResult = await sdk.playlists.createPlaylist(
        uid,
        'Test Private',
        'private',
      );

      expect(fetchSpy.request().input).toBe(
        `https://api.music.yandex.net/users/${uid}/playlists/create`,
      );

      expect(createResult.title).toStrictEqual('Test Private');
      expect(createResult.visibility).toStrictEqual('private');

      const deleteResult = await sdk.playlists.deletePlaylist(
        uid,
        createResult.kind,
      );

      expect(fetchSpy.lastRequest().input).toBe(
        `https://api.music.yandex.net/users/${uid}/playlists/${createResult.kind}/delete`,
      );

      expect(deleteResult).toStrictEqual('ok');
    });

    it('create public playlist and delete it', async () => {
      const createResult = await sdk.playlists.createPlaylist(
        uid,
        'Test Public',
        'public',
      );

      expect(fetchSpy.request().input).toBe(
        `https://api.music.yandex.net/users/${uid}/playlists/create`,
      );

      expect(createResult.title).toStrictEqual('Test Public');
      expect(createResult.visibility).toStrictEqual('public');

      const deleteResult = await sdk.playlists.deletePlaylist(
        uid,
        createResult.kind,
      );

      expect(fetchSpy.lastRequest().input).toBe(
        `https://api.music.yandex.net/users/${uid}/playlists/${createResult.kind}/delete`,
      );

      expect(deleteResult).toStrictEqual('ok');
    });
  });

  describe('update playlist', () => {
    it('update name', async () => {
      const createResult = await sdk.playlists.createPlaylist(
        uid,
        'Name',
        'private',
      );

      const updateResult = await sdk.playlists.updatePlaylistName(
        uid,
        createResult.kind,
        'New name',
      );

      expect(fetchSpy.lastRequest().input).toBe(
        `https://api.music.yandex.net/users/${uid}/playlists/${createResult.kind}/name`,
      );

      expect(updateResult.title).toStrictEqual('New name');

      await sdk.playlists.deletePlaylist(uid, createResult.kind);
    });

    it('update visibility', async () => {
      const createResult = await sdk.playlists.createPlaylist(
        uid,
        'Name',
        'private',
      );

      const updateResult = await sdk.playlists.updatePlaylistVisibility(
        uid,
        createResult.kind,
        'public',
      );

      expect(fetchSpy.lastRequest().input).toBe(
        `https://api.music.yandex.net/users/${uid}/playlists/${createResult.kind}/visibility`,
      );

      expect(updateResult.visibility).toStrictEqual('public');

      await sdk.playlists.deletePlaylist(uid, createResult.kind);
    });
  });
});
