import { useEffect } from 'react';

export function useOutsideAlerter(
  ref1: React.RefObject<HTMLElement>,
  ref2: React.RefObject<HTMLElement>,
  setOpenMenu: (val: boolean) => void,
  hideMainSection: (val: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(target: Node | null) {
      if (
        (!ref1.current?.contains(target) && !ref2.current?.contains(target)) ||
        (ref1.current?.contains(target) && target?.nodeName === 'A')
      ) {
        setOpenMenu(false);
        hideMainSection(true);
      }
    }
    document.addEventListener('mousedown', (e) => handleClickOutside(e.target as Node | null));
    return () => {
      document.removeEventListener('mousedown', (e) => handleClickOutside(e.target as Node | null));
    };
  }, [ref1, ref2, setOpenMenu, hideMainSection]);
}
