import { renderHook, act } from '@testing-library/react';
import { useClickOutside } from './use-click-outside';

test('test use  with div element', () => {
  const setState = jest.fn();
  const ref = { current: document.createElement('div') };

  renderHook(() => useClickOutside<HTMLDivElement>(ref, setState));

  act(() => {
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  });

  expect(setState).toBeCalledWith(false);
  expect(setState).toBeCalledTimes(1);
});

test('test use  with input element', () => {
  const setState = jest.fn();
  const ref = { current: document.createElement('input') };

  renderHook(() => useClickOutside<HTMLInputElement>(ref, setState));

  act(() => {
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  });

  expect(setState).toBeCalledWith(false);
  expect(setState).toBeCalledTimes(1);
});

test('test by other user event', () => {
  const setState = jest.fn();
  const ref = { current: document.createElement('div') };

  renderHook(() => useClickOutside<HTMLDivElement>(ref, setState));

  act(() => {
    document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(setState).toBeCalledTimes(0);
});
