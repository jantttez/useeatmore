import { act, renderHook } from '@testing-library/react';
import { useBoolean } from './use-boolean';

test('init test without default value', () => {
  const { result } = renderHook(useBoolean);
  const [state, toggle] = result.current;

  expect(state).toBe(false);
  expect(typeof toggle).toBe('function');
});

test('init test with default value', () => {
  const { result } = renderHook(() => useBoolean(true));
  const [state, toggle] = result.current;

  expect(state).toBe(true);
  expect(typeof toggle).toBe('function');
});

test('toggle test', () => {
  const { result } = renderHook(useBoolean);
  const toggle = result.current[1];

  act(toggle);

  expect(result.current[0]).toBe(true);

  act(toggle);
  expect(result.current[0]).toBe(false);

  act(() => toggle(true));

  expect(result.current[0]).toBe(true);

  act(() => toggle(false));

  expect(result.current[0]).toBe(false);
});
