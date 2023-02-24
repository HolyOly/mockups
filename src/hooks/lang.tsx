import { useCallback, useEffect, useState } from 'react';
import { langPack } from '../data/lang';

export const langStore: { curLang: string } = {
  curLang: 'en',
};

export function useLang() {
  const newLang = langStore;
  const [curLang, setLang] = useState(langStore.curLang);

  const getLang = useCallback(
    (key: string) => {
      return langPack[key][newLang.curLang];
    },
    [newLang.curLang]
  );

  useEffect(() => {
    setLang(newLang.curLang);
  }, [getLang, curLang, setLang, newLang]);

  return { setLang, getLang, newLang };
}
