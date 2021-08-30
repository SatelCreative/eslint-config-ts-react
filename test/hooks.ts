import { useEffect, useState } from 'react';

export function useHook() {
  const [counter] = useState(1);

  useEffect(() => {
    if (counter > 3) {
      console.log('Its bigger');
    }
  }, [counter]);
}
