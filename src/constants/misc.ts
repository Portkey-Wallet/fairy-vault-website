import { BackEndNetworkType } from 'types/network';

export const RE_CAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export const NEXT_PUBLIC_NETWORK_ENV: BackEndNetworkType = process.env.NEXT_PUBLIC_NETWORK_ENV as BackEndNetworkType;
