import { useState } from 'react';

type Return = [state: boolean, toggle: (value?: boolean) => void];

/*
Usage 

const [myState, toggle] = useBoolean() 
or
const [myTrueState, toggleTrueState] = useBoolean(true) 

*/

//default state equal false
export function useBoolean(defaultState = false): Return {
  const [state, setState] = useState(defaultState);

  const toggle = (value?: boolean) => setState((prevValue) => (value ? value : !prevValue));

  return [state, toggle] as const; //return readOnly array with state and toggle function
}
