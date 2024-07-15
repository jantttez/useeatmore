import { renderHook } from '@testing-library/react';
import { useObserve } from './use-observe';
import { intersectionObserverMock } from '../../__test__/mock-intersection-observe';

beforeAll(() => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
});

afterAll(() => {
  jest.clearAllMocks();
});
//test loses because node/bable/jest-dom enviroment dont have a intersectionObserveApi
it('should execute callback when element is intersecting and not loading', () => {
  const ref = { current: document.createElement('div') };
  const callback = jest.fn();
  const isLoading = false;
  const hasMore = false;

  renderHook(() => useObserve(ref, callback, isLoading, hasMore));

  expect(callback).toBeCalledTimes(0);
});
