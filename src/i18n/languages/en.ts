// src/i18n/languages/en.ts
import en_flag from '../../assets/img/flags/en.png';
import type { TranslationKeys } from '../ui';

const aboutTextEn = [
  'I\'m 22 years old and currently in my first year of a Master\'s degree in Computer Science at the University of Milano-Bicocca. I\'m highly interested in <strong>Software Engineering</strong> and <strong>Web Development</strong> in general.',
  'Outside of university, I have several hobbies:<br><ul class="hobby-list"><li>💻 <strong>Programming:</strong> from small tools to websites and various projects.</li><li>🎮 <strong>Video editing & Gaming.</strong></li><li>⛰️ <strong>Outdoors:</strong> I love working out and spending time with my family.</li></ul>'
];

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
    importantProjects: 'Hey you, did you know I developed a game? Check it out below!',
  },
  about: {
    subtitle: 'Hi! I\'m',
    text_1: aboutTextEn[0],
    text_2: aboutTextEn[1],
  },
  contacts: {
    title: 'Contacts',
  }
};