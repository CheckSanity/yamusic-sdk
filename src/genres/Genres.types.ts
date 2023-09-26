import { Icon } from '../common/Common.types';

export type Genre = {
  id: string;
  weight: number;
  composerTop: boolean;
  title: string;
  titles: Record<string, GenreTranslation>;
  images?: Record<string, string>;
  showInMenu: boolean;
  showInRegions?: number[];
  fullTitle?: string;
  urlPart?: string;
  color?: string;
  radioIcon?: Icon;
  subgenres?: Genre[];
  hideInRegions?: number[];
};

export type GenreTranslation = {
  title: string;
  fullTitle?: string;
  subgenres?: Genre[];
};
