# Yandex.Music API SDK - TypeScript

This is an unofficial JavaScript/TypeScript SDK for
the [Yandex.Music](https://music.yandex.ru/).

## Requirements

Because this SDK uses `fetch` both in Node and the Browser, and ESM, we require the following:

- Node 18.0.0 or higher
- A modern, version infinite, browser

The package contains both an ESM and CommonJS build, so you can use it in both Node and the Browser.

## Running the example app

First install the dependencies:

```bash
yarn install
```

Create a `.env` file in the example directory with your `accessToken`:

```bash .env
YANDEX_MUSIC_TOKEN=your_access_token
```

To run the app:

```bash
yarn run start
```

### Creating a client instance

Creating an instance of the SDK is easy

```js
import {YaMusicSDK} from '@sanity/yamusic-sdk';

// Choose one of the following:
const sdk = YaMusicSDK.create({token: 'your_access_token'});
```

Each of these factory methods will return a `YaMusicSDK` instance, which you can use to make
requests to the Yandex.Music API.

```js
const status = await api.account.status();

console.table(status.account);
```

### Extensibility

All of the constructors support a configuration object that lets you override the default behavior
of the SDK.

```ts
const defaultConfig: SdkConfiguration = {
    fetch: (req: RequestInfo | URL, init: RequestInit | undefined) =>
        fetch(req, init),
    url: 'https://api.music.yandex.net/',
    token: '',
};
```

As a general rule, this options should be overridden when you create your instance of the client,
and you probably won't have to change most of them unless you have some very specific requirements.

You can provide the options like this, to any of the constructors or static initialization methods:

```js
const opts = {
    token: 'my_secret_token',
    fetch: (req, init) => {
        console.log("Fire custom fetch first");
        return fetch(req, init);
    }
}

const sdk = YaMusicSDK.create(opts);
```

All the below examples are in TypeScript, but the same method signatures all apply to JavaScript -
just without the Type information.

## Running the tests

To run the tests, you need to have a Yandex Music access token.

You will need to add the following environment variables that can be placed in `.env` file:

- `INTEGRATION_TESTS_YANDEX_MUSIC_TOKEN`

Now you can run the tests with `yarn run test`.
