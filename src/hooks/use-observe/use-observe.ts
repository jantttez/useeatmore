import { MutableRefObject, RefObject, useEffect } from 'react';

type InputRefType<T> = RefObject<T> | MutableRefObject<T>; //ur HTML ref elemtn type like as div, input, etc.

/*
Usage 

useObserve(urRef, callbackWhoCalls, currentPage < Allpages  ,isLoading)

//currentPage < Allpages  for example condition for dinamyc pagination

*/

export function useObserve<T extends HTMLElement>(
  ref: InputRefType<T>, // ur link to ref
  callback: () => void, //callback who calls where ref in view port
  hasMore: boolean, // more calls callback ?
  isLoading?: boolean //state loading ur request
) {
  useEffect(() => {
    if (isLoading) return;
    if (!hasMore) return;
    const currentRef = ref.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [ref, callback, isLoading, hasMore]);
}
