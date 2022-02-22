/* eslint-disable no-promise-executor-return */
const moviesListArray = new Promise((resolve) => resolve([
  {
    id: '1and3011',
    imageURL:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    title: 'Inferno',
    summary: 'Lorem ipsum….',
    rating: 5.3,
  },
  {
    id: '2301abc',
    imageURL:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
    title: 'Star Wars: Episode VII - The Force Awakens',
    summary: 'Lorem ipsum….',
    rating: 8.2,
  },
  {
    id: 'ID3',
    imageURL:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    title: 'Skazani na Shawshank',
    summary: 'Lorem ipsum….',
    rating: 9.2,
  },
  {
    id: 'ID4',
    imageURL:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    title: 'Ojciec Chrzestny',
    summary: 'Lorem ipsum….',
    rating: 9.1,
  },
  {
    id: 'ID5',
    imageURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    title: 'Grozny rycerz',
    summary: 'Lorem ipsum….',
    rating: 9.0,
  },
]));

export default moviesListArray;
