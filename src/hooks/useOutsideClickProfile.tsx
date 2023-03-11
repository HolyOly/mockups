import { useEffect } from 'react';

export function useOutsideClick(
  ref1: React.RefObject<HTMLElement>,
  setSmth: (val: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(target: Node | null) {
      if (!ref1.current?.contains(target)) {
        setSmth(false);
      } else {
        setSmth(true);
      }
    }
    document.addEventListener('click', (e) => handleClickOutside(e.target as Node | null));
    return () => {
      document.removeEventListener('click', (e) => handleClickOutside(e.target as Node | null));
    };
  }, [ref1, setSmth]);
}
