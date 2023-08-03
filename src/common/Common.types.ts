export type Cover = {
  /**
   * Cover type
   *
   * @example 'mosaic', 'pic', 'from-artist-photos'
   */
  type: string;

  /**
   * Is custom?
   */
  custom: boolean;

  /**
   * Array of images URI if type mosaic
   */
  itemsUri?: string[];

  /**
   * TODO ???
   */
  dir?: string;

  /**
   * TODO ???
   */
  version?: string;

  /**
   * Image URI
   */
  uri?: string;

  /**
   * Prefix? TODO
   */
  prefix?: string;
};

export type CustomWave = {
  /**
   * Title
   */
  title: string;

  /**
   * Animation URL
   *
   * @example 'https://music-custom-wave-media.s3.yandex.net/base.json'
   */
  animationUrl: string;

  /**
   * Position
   *
   * @example 'default'
   */
  position: string;

  /**
   * Header text
   *
   * @example 'Моя волна по плейлисту'
   */
  header: string;
};

export type Pager = {
  total: number;
  page: number;
  perPage: number;
};

export type Region = 'RUSSIA' | 'RUSSIA_PREMIUM' | string;
