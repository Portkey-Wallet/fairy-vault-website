import { NavigationType, ROUTER } from 'constants/enum';
import router from 'next/router';

export function jumpOrScrollToTop(path: ROUTER, callback?: () => void): void {
  if (path === router.pathname) {
    window.scrollTo(0, 0);
    callback?.();
  } else {
    router.push(path);
  }
}

export function openWithBlank(url: string): void {
  const newWindow = window.open(url, '_blank');
  if (newWindow) {
    newWindow.opener = null;
  }
}

export function openOriginWithBlank(pathname: string): void {
  openWithBlank(window.location.origin + pathname);
}

export function switchPage(type: NavigationType, path?: string | ROUTER, callback?: () => void): void {
  if (!type || !path) return;
  switch (type) {
    case NavigationType.ROUTE:
      jumpOrScrollToTop(path as ROUTER, callback);
      break;
    case NavigationType.OPEN_NEW_TAB:
      openWithBlank(path);
      callback?.();
      break;
    default:
      break;
  }
}

export const getQueryParams = () => {
  return new URLSearchParams(window.location.search);
};

export const getDecodedBase64Data = (raw: string) => {
  return window.btoa(raw);
};

export const closeWindow = () => {
  window.opener = null;
  window.close();
};

export const getOpenerOrigin = () => {
  return document.referrer;
};
