import { YaMusicSDK } from '../YaMusicSDK';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export class FetchApiSpy {
  private issuedRequests: {
    input: RequestInfo | URL;
    init?: RequestInit;
  }[] = [];

  constructor(readonly logResults: boolean = false) {}

  public async fetch(
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ): Promise<Response> {
    this.issuedRequests.push({ input, init });
    const result = fetch(input, init);

    if (this.logResults) {
      const awaited = await result;
      const clone = awaited.clone();

      if (!fs.existsSync('temp')) {
        fs.mkdirSync('temp');
      }

      const uniqueId = uuidv4();
      const bodyText = await clone.text();

      const fileContents = `
// URL: ${awaited.url}
// Status: ${awaited.status}
// Status Text: ${awaited.statusText}

${bodyText}`.trim();

      fs.writeFileSync(`temp/${uniqueId}.json`, fileContents);

      return awaited;
    }

    return result;
  }

  public request() {
    return this.issuedRequests[0];
  }

  public lastRequest() {
    return this.issuedRequests[this.issuedRequests.length - 1];
  }
}

export function buildIntegrationTestSdkInstance(
  logResults: boolean = false,
): [YaMusicSDK, FetchApiSpy] {
  const token = process.env.INTEGRATION_TESTS_YANDEX_MUSIC_TOKEN;

  if (!token) {
    throw new Error(
      'No client token provided. Please provide a valid client token in the /.env file as: INTEGRATION_TESTS_YANDEX_MUSIC_TOKEN',
    );
  }

  const fetchSpy = new FetchApiSpy(logResults);

  const sdkInstance = YaMusicSDK.create({
    token: token,
    fetch: (input: RequestInfo | URL, init?: RequestInit) => {
      return fetchSpy.fetch(input, init);
    },
  });

  return [sdkInstance, fetchSpy];
}
