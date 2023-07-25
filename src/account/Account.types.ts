export type Account = {
  /**
   * Current date and time
   *
   * @example "2023-07-25T18:56:06+00:00"
   */
  now: string;

  /**
   * Unique ID
   *
   * @example 132111868
   */
  uid?: number;

  /**
   * Login, usually based on email
   *
   * @example "some_login"
   */
  login?: string;

  /**
   * Full name
   *
   * @example "John Doe"
   */
  fullName?: string;

  /**
   * Second name
   *
   * @example "Doe"
   */
  secondName?: string;

  /**
   * First name
   *
   * @example "John"
   */
  firstName?: string;

  /**
   * Display name
   *
   * @example "John Doe"
   */
  displayName?: string;

  /**
   * Is service available
   *
   * @example true
   */
  serviceAvailable?: boolean;

  /**
   * Is hosted user
   *
   * @example false
   */
  hostedUser?: boolean;

  /**
   * Birthday date
   *
   * @example "1995-10-04"
   */
  birthday?: string;

  /**
   * Region
   */
  region?: number;

  /**
   * Account phone numbers
   */
  passportPhones?: PassportPhone[];

  /**
   * Registration date
   *
   * @example "2021-04-05T14:26:22+00:00"
   */
  registeredAt?: string;

  /**
   * Is account belongs to child
   *
   * @example false
   */
  child?: boolean;

  /**
   * // TODO ???
   */
  nonOwnerFamilyMember?: boolean;
};

export type PassportPhone = {
  /**
   * Phone number
   *
   * @example "+78005553535"
   */
  phone: string;
};

export type Permissions = {
  /**
   * Permission due date
   *
   * @example "2023-07-25T18:56:06+00:00"
   */
  utils: string;

  /**
   * Permission values
   *
   * @example ["landing-play",
   *           "feed-play",
   *           "radio-play",
   *           "mix-play",
   *           "radio-skips",
   *           "library-cache",
   *           "library-play",
   *           "high-quality",
   *           "ads-skips",
   *           "non-shuffled-play",
   *           "background-play",
   *           "play-premium-tracks",
   *           "auto-flow",
   *           "play-full-tracks",
   *           "play-radio-full-tracks"]
   */
  values: string[];

  /**
   * Permission defaults
   *
   * @example ["landing-play",
   *           "feed-play",
   *           "radio-play",
   *           "mix-play"
   *          ]
   */
  default: string[];
};

export type AccountStatus = {
  account: Account;

  /**
   * Default email
   *
   * @example "email@email.com"
   */
  defaultEmail?: string;

  /**
   * User hash value
   *
   * @example "24754bf9fd6be1acd"
   */
  userhash?: string;

  // TODO Other
};

export type AccountSettings = {
  /**
   * Unique ID
   *
   * @example 132111868
   */
  uid: number;

  /**
   * Is Last.fm scrobbling enabled
   */
  lastFmScrobblingEnabled: boolean;

  /**
   * Is Facebook scrobbling enabled
   */
  facebookScrobblingEnabled: boolean;

  /**
   * Is shuffle enabled
   */
  shuffleEnabled: boolean;

  /**
   * Should add tracks to the top of the playlist
   */
  addNewTrackOnPlaylistTop: boolean;

  /**
   * Volume level (max = 100)
   *
   * @example 75
   */
  volumePercents: number;

  /**
   * Music visibility status
   *
   * @example "PUBLIC"
   */
  userMusicVisibility: string;

  /**
   * Socials visibility status
   *
   * @example "PUBLIC"
   */
  userSocialVisibility: string;

  /**
   * Is Ads disabled
   */
  adsDisabled?: boolean;

  /**
   * Settings modified date
   *
   * @example '2021-11-08T15:51:47Z'
   */
  modified: string;

  /**
   * // TODO ???
   */
  rbtDisabled: false;

  /**
   * Color theme
   *
   * @example "white"
   */
  theme: string;

  /**
   * Is promo disabled
   */
  promosDisabled: boolean;

  /**
   * Should autoplay radio?
   */
  autoPlayRadio: boolean;

  /**
   * Sync queue between devices
   */
  syncQueueEnabled: boolean;

  /**
   * Should forbid explicit content
   */
  explicitForbidden: boolean;

  /**
   * Is in child mod
   */
  childModEnabled: boolean;
};
