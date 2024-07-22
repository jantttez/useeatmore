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
export declare function useBoolean(defaultState?: boolean): Return;
export {};
//# sourceMappingURL=use-boolean.d.ts.map