import { useEffect, useState } from 'react';

export const useString = (str: any) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(str);
  }, [value]);

  return value;
};
