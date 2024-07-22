import { MutableRefObject, RefObject } from 'react';
type InputRefType<T> = RefObject<T> | MutableRefObject<T>;
export declare function useObserve<T extends HTMLElement>(ref: InputRefType<T>, // ur link to ref
callback: () => void, //callback who calls where ref in view port
hasMore: boolean, // more calls callback ?
isLoading?: boolean): void;
export {};
//# sourceMappingURL=use-observe.d.ts.map