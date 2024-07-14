import { useState } from 'react';

export function useBoolean() {
  const [state, setState] = useState(false);

  return [state, setState] as const;
}
