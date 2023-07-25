import { YaMusicSDK } from './YaMusicSDK';

export class BaseApi {
  constructor(protected sdk: YaMusicSDK) {}

  protected async getRequest<R>(url: string): Promise<R> {
    return await this.sdk.makeRequest<R>('GET', url);
  }

  protected async postRequest<R, B = unknown>(
    url: string,
    body?: B,
    contentType: string | undefined = undefined,
  ): Promise<R> {
    return await this.sdk.makeRequest<R>('POST', url, body, contentType);
  }

  protected async putRequest<R, B = unknown>(
    url: string,
    body?: B,
    contentType: string | undefined = undefined,
  ): Promise<R> {
    return await this.sdk.makeRequest<R>('PUT', url, body, contentType);
  }

  protected async deleteRequest<R, B = unknown>(
    url: string,
    body?: B,
  ): Promise<R> {
    return await this.sdk.makeRequest<R>('DELETE', url, body);
  }
}
