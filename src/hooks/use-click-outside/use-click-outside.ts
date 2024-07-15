import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

// interface Props<T> {
//   ref: MutableRefObject<T | null>;
//   setState: Dispatch<SetStateAction<boolean>>;
// }

// i dont now how better i can do

/*
Usage 

useClickOutside<HTMLDivElement>(exampleRefWithDivElement, setUrState)

useClickOutside<HTMLInputElement>(exampleRefWithInputElement, setUrState)

*/
export function useClickOutside<T extends HTMLElement>(
  ref: MutableRefObject<T | null>, //maybe here correctly use RefObject instead MutableRefObject...
  setState: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', clickHandler);

    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, [ref, setState]);
}
