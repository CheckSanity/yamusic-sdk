import { BaseApi } from '../BaseApi';
import { AccountSettings, AccountStatus } from './Account.types';

export class AccountApi extends BaseApi {
  public async status(): Promise<AccountStatus> {
    return this.getRequest<AccountStatus>(`account/status`);
  }

  public async settings(): Promise<AccountSettings> {
    return this.getRequest<AccountSettings>(`account/settings`);
  }

  // TODO Currently fields not updating, but modified data updates
  public async setSettings(body: unknown): Promise<AccountSettings> {
    return this.postRequest<AccountSettings, unknown>(`account/settings`, body);
  }
}
