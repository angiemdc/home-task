import pmovie from './assets/images/pmovie.svg';
import bmovie from './assets/images/bmovie.svg';
import kmovie from './assets/images/kmovie.svg';
import amovie from './assets/images/amovie.svg';
import imovie from './assets/images/imovie.svg';
import rmovie from './assets/images/rmovie.svg';

export const genres = ['Crime', 'Documentary', 'Horror', 'Comedy'];

export const tabsContent = [
  { name: 'All', tabId: '1' },
  { name: 'Documentary', tabId: '2' },
  { name: 'Comedy', tabId: '3' },
  { name: 'Horror', tabId: '4' },
  { name: 'crime', tabId: '5' }
];

export const movieData = [
  {
    name: 'Pulp Fiction',
    movieType: 'Action & Adventure',
    id: 'pul1',
    image: pmovie,
    year: '1996'
  },
  {
    name: 'Bohemian Rhapsody',
    movieType: 'Drama, Biography, Music',
    id: 'boh1',
    image: bmovie,
    year: '2003'
  },
  {
    name: 'Kill Bill: Vol 2',
    movieType: 'Oscar winning Movie',
    id: 'kil1',
    image: kmovie,
    year: '1994'
  },
  {
    name: 'Avengers: War of Infinity',
    movieType: 'Action & Adventure',
    id: 'av1',
    image: amovie,
    year: '2004'
  },
  {
    name: 'Inception',
    movieType: 'Action & Adventure',
    id: 'in1',
    image: imovie,
    year: '2003'
  },
  {
    name: 'Reservoir dogs',
    movieType: 'Oscar winning Movie',
    id: 're1',
    image: rmovie,
    year: '1994'
  }
];
