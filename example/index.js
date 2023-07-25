import dotenv from 'dotenv';
import { YaMusicSDK } from '../dist/cjs/index.js';

dotenv.config();

const api = YaMusicSDK.create({
  token: process.env.YANDEX_MUSIC_TOKEN,
});

const status = await api.account.status();
console.table(status.account);

const playlists = await api.users.playlists(status.account.login);
console.table(playlists);
