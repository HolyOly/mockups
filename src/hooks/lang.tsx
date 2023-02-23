import { useEffect, useState } from 'react';
import { langPack } from '../data/lang';

export const langObj: { curLang: string } = {
  curLang: 'en',
};

export function useLang() {
  const [curLang, setLang] = useState(langObj.curLang);

  const getLang = (key: string) => {
    return langPack[key][curLang];
  };

  useEffect(() => {
    setLang(curLang);
    setLang(langObj.curLang);
    console.log('hook', curLang);
  }, [curLang, getLang, setLang]);

  return { setLang, getLang };
}
