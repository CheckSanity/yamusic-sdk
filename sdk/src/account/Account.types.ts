import { Visibility } from '../common/Common.types';

export type Account = {
  now: string;
  uid?: number;
  login?: string;
  region?: number;
  fullName?: string;
  secondName?: string;
  firstName?: string;
  displayName?: string;
  serviceAvailable?: boolean;
  hostedUser?: boolean;
  birthday?: string;
  passportPhones?: PassportPhone[];
  registeredAt?: string;
  child?: boolean;
  nonOwnerFamilyMember?: boolean;
};

export type PassportPhone = {
  phone: string;
};

export type Permissions = {
  utils: string;
  values: string[];
  default: string[];
};

export type Subscription = {
  hadAnySubscription?: boolean;
  canStartTrial?: boolean;
  mcdonalds?: boolean;
  autoRenewable?: {
    expires?: string;
    vendor?: string;
    vendorHelpUrl?: string;
    productId?: string;
    product?: {
      productId?: string;
      type?: string;
      commonPeriodDuration?: string;
      duration?: number;
      trialDuration?: number;
      price?: {
        amount?: number;
        currency?: string;
      };
      family?: boolean;
      plus?: boolean;
      feature?: string;
      features?: string[];
      debug?: boolean;
    };
    orderId?: number;
    finished?: boolean;
  };
  nonAutoRenewableRemainder?: {
    days?: number;
  };
};

export type AccountStatus = {
  account: Account;
  defaultEmail?: string;
  userhash?: string;
  permissions?: Permissions;
  subscription?: Subscription;
  subeditor?: boolean;
  subeditorLevel?: number;
  pretrialActive?: number;
  plus?: {
    hasPlus?: boolean;
    isTutorialCompleted?: boolean;
  };
};

export type AccountSettings = {
  uid: number;
  lastFmScrobblingEnabled: boolean;
  facebookScrobblingEnabled: boolean;
  shuffleEnabled: boolean;
  addNewTrackOnPlaylistTop: boolean;
  volumePercents: number;
  userMusicVisibility: Visibility;
  userSocialVisibility: Visibility;
  adsDisabled: boolean;
  modified: string;
  rbtDisabled: false;
  theme: 'black' | 'default';
  promosDisabled: boolean;
  autoPlayRadio: boolean;
  syncQueueEnabled: boolean;
  explicitForbidden: boolean;
  childModEnabled: boolean;
};
