import { langPack } from '../data/lang';

export function getLang(key: string, lang: string): string {
  return langPack[key][lang];
}
