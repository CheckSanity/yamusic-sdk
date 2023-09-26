export type Cover = {
  type?: string;
  prefix?: string;
  dir?: string; // Exist when type="pic"
  itemsUri?: string[]; // Exist when type mosaic
  version?: string;
  uri?: string;
  custom?: boolean;
  error?: string;
};

export type CustomWave = {
  title: string;
  animationUrl: string;
  position: string;
  header: string;
};

export type Pager = {
  total: number;
  page: number;
  perPage: number;
};

export type Region = 'RUSSIA' | 'RUSSIA_PREMIUM' | string;

export type VideoSupplement = {
  cover?: string;
  provider?: string;
  title?: string;
  providerVideoId?: string;
  url?: string;
  embedUrl?: string;
  embed?: string;
};

export type Visibility = 'PRIVATE' | 'PUBLIC';

export type UserInfo = {
  uid: number;
  login: string;
  name?: string;
  sex?: string;
  verified?: false;
};

export type Icon = {
  backgroundColor: string;
  imageUrl: string;
};
