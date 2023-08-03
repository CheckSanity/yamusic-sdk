export type Genre = {
  /**
   * Genre ID
   *
   * @example pop
   */
  id: string;

  /**
   * Genre weight
   *
   * @example 1
   */
  weight: number;

  /**
   * TODO composerTop
   */
  composerTop: boolean;

  /**
   * URL part
   *
   * @example pop
   */
  urlPart?: string;

  /**
   * Genre title
   *
   * @example Поп
   */
  title: string;

  /**
   * Genre full title
   *
   * @example Музыка всех жанров
   */
  fullTitle?: string;

  /**
   * Genre title translations
   */
  titles: Record<string, GenreTranslation>;

  /**
   * Genre color
   *
   * @example #ff6665
   */
  color?: string;

  /**
   * Genre images
   *
   * @example {"208x208": "http://avatars.mds.yandex.net/get-music-misc/28052/metagenre-pop-x208/orig",}
   */
  images?: Record<string, string>;

  /**
   * Show in menu?
   */
  showInMenu: boolean;

  /**
   * TODO radioIcon
   */
  radioIcon?: RadioIcon;

  /**
   * Show in regions
   */
  showInRegions?: number[];

  /**
   * Hide in regions
   */
  hideInRegions?: number[];
};

export type GenreTranslation = {
  /**
   * Genre title
   *
   * @example Поп
   */
  title: string;

  /**
   * Genre full title
   *
   * @example Музыка всех жанров
   */
  fullTitle?: string;

  /**
   * Sub genres
   */
  subgenres?: Genre[];
};

export type RadioIcon = {
  /**
   * Background color
   *
   * @example #3779bc
   */
  backgroundColor: string;

  /**
   * Image URL
   */
  imageUrl: string;
};
