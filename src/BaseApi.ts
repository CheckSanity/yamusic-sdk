import { YaMusicSDK } from './YaMusicSDK';

export class BaseApi {
  constructor(protected sdk: YaMusicSDK) {}

  protected async getRequest<R>(url: string): Promise<R> {
    return await this.sdk.makeRequest<R>('GET', url);
  }

  protected async postRequest<R, B = unknown>(
    url: string,
    args?: {
      body?: B;
      formData?: FormData;
      contentType?: string;
    },
  ): Promise<R> {
    return await this.sdk.makeRequest<R>('POST', url, args);
  }

  protected async putRequest<R, B = unknown>(
    url: string,
    args?: {
      body?: B;
      formData?: FormData;
      contentType?: string;
    },
  ): Promise<R> {
    return await this.sdk.makeRequest<R>('PUT', url, args);
  }

  protected async deleteRequest<R, B = unknown>(
    url: string,
    args?: {
      body?: B;
      formData?: FormData;
      contentType?: string;
    },
  ): Promise<R> {
    return await this.sdk.makeRequest<R>('DELETE', url, args);
  }
}
