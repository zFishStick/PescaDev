// src/i18n/languages/en.ts
import en_flag from '../../assets/img/flags/en.png';
import type { TranslationKeys } from '../ui';

export const en: TranslationKeys = {
  common: {
    flag: en_flag.src,
  },
  nav: {
    home: 'Home',
    about: 'About Me',
    contacts: 'Contacts',
  },
  home: {
    title: 'Welcome to PescaDev!',
    about: 'My name is Gabriel and I\'m a passionate web developer.',
    contacts: 'Check out my socials!',
  },
  projects: {
    footerTitle: 'Some of my most important projects.',
  },
  about: {
    subtitle: 'Hi! I\'m',
  },
  contacts: {
    title: 'Contacts',
  }
};