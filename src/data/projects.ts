
import ianuaImg from '../assets/img/projects/ianua.png';
import rustpadImg from '../assets/img/projects/rustpad.png';
import travelplannerImg from '../assets/img/projects/travel-planner.png';
import { en } from '../i18n/languages/en';

export const projects = [
    {
        id: 1,
        img: ianuaImg,
        name: 'Ianua',
        description: {
            en: 'My first videogame made for a Game Jam, focused on Neapolitan culture and folklore.',
            it: 'Il mio primo videogioco sviluppato per una Game Jam, incentrato sulla cultura e il folklore napoletano.'
        },
        link: 'https://pescamolle.itch.io/iuanua'
    },
    {
        id: 2,
        img: rustpadImg,
        name: 'RustPAD',
        description: {
            en: 'A tool developed for my bachelor thesis, aimed to detect Performance Antipatterns in Rust programs.',
            it: 'Uno strumento sviluppato per la mia tesi di laurea, mirato alla rilevazione di Antipatterns di Performance nei programmi Rust.'
        },
        link: 'https://example.com/project-two'
    },
    {
        id: 3,
        img: travelplannerImg,
        name: 'Dark Soul Roulette',
        description: {
            en: 'A roulette game based on the Dark Souls franchise.',
            it: 'Un roulette game basato sul gioco Dark Souls.'
        },
        link: 'https://zfishstick.github.io/Dark-Souls-Roulette/'
    }
];