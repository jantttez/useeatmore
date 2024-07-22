import { useState } from 'react';

type Return = [state: boolean, toggle: (value?: boolean) => void];

/**
 * @name useBoolean
 * @description - hook return boolean  value and toggle function.
 *
 * @param {boolean} [initialValue=false] The initial boolean value
 * @returns {Return} return value
 *
 * @example
 * const [state, toggle] = useBoolean() - without ur state
 *
 * const [trueState, toggleTrueState] = useBoolean(true) - with ur state
 */

//default state equal false
export function useBoolean(defaultState = false): Return {
  const [state, setState] = useState(defaultState);

  const toggle = (value?: boolean) => setState((prevValue) => (value ? value : !prevValue));

  return [state, toggle] as const; //return readOnly array with state and toggle function
}
