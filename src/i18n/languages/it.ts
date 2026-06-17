// src/i18n/languages/it.ts
import it_flag from '../../assets/img/flags/it.png';

const aboutText = [
  'Ho 22 anni, sto frequentando il mio primo anno di Magistrale in Informatica all\'Università di Milano Bicocca. Sono molto interessato all\'ambito dell\'<strong>Ingegneria del Software</strong> e in generale allo <strong>sviluppo Web</strong>.',
  'All\'infuori dell\'università, ho diversi hobby:<br><ul class="hobby-list"><li>💻 <strong>Programmazione:</strong> da piccoli tool a siti web e progetti vari.</li><li>🎮 <strong>Videogiochi ed Editing video.</strong></li><li>⛰️ <strong>Vita all\'aria aperta:</strong> mi piace allenarmi e passare del tempo con la mia famiglia.</li></ul>'
];

export const it = {
  common: {
    flag: it_flag.src,
  },
  nav: {
    home: 'Home',
    about: 'Chi Sono',
    contacts: 'Contatti',
  },
  home: {
    title: 'Benvenuto su PescaDev!',
    about: 'Il mio nome è Gabriel e sono un appassionato sviluppatore web.',
    contacts: 'Dai un\'occhiata ai miei social!',
  },
  projects: {
    footerTitle: 'Alcuni dei miei progetti più importanti.',
    importantProjects: 'Hey tu, sai che ho sviluppato un gioco? Dai un\'occhiata qui sotto!',
  },
  about: {
    subtitle: 'Ciao! Sono',
    text_1: aboutText[0],
    text_2: aboutText[1],
  },
  contacts: {
    title: 'Contatti',
  }
}