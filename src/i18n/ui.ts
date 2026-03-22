// src/i18n/ui.ts
import { it } from './languages/it';
import { en } from './languages/en';

export const languages = {
  it: 'Italiano',
  en: 'English',
};

export const defaultLang = 'it';

export const ui = {
  it,
  en,
} as const;

export type TranslationKeys = typeof it;