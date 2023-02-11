import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [something, setSomething] = useState([]);

  const getSomething = async () => {
    const response = await fetch(url);
    const something = await response.json();
    setSomething(something);
    setLoading(false);
  };

  useEffect(() => {
    getSomething();
  }, [url]);
  return { loading, something };
};
