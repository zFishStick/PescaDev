// src/i18n/languages/it.ts
import it_flag from '../../assets/img/flags/it.png';

const aboutText = [
  'Ho 22 anni e attualmente sto frequentando il mio primo anno di Magistrale in Informatica, con sede l\'Università di Milano Bicocca. Tra i vari corsi, quelli a cui sono più interessato vertono sull\'ambito dell\'Ingegneria del Software e in generale lo sviluppo Web.',
  'All\'infuori dell\'università, ho diversi hobby, tra cui la programmazione (da piccoli tool, siti web e progetti più importanti per me), l\'editing video, i videogiochi (cosa ti aspetti da un informatico 🤓), ma in generale mi piace molto stare all\'aria aperta, allenarmi e passare del tempo con la mia famiglia.', 
]

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