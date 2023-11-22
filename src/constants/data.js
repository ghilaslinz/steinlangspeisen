import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '€51',
    tags: 'Australien | Flasche',
  },
  {
    title: 'Catena Malbec',
    price: '€54',
    tags: 'Australien | Flasche',
  },
  {
    title: 'La Vieille Rose',
    price: '€40',
    tags: 'Frankreich | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '€28',
    tags: 'Kanada | 750 ml',
  },
  {
    title: 'Irisches Guinness',
    price: '€23',
    tags: 'Irland | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '20€',
    tags: 'Aperol | Villa Marchesi Prosecco | Soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '16€',
    tags: 'Dunkler Rum | Ingwerbier | Limettenscheibe',
  },
  {
    title: 'Daiquiri',
    price: '10€',
    tags: 'Rum | Zitrussaft | Zucker',
  },
  {
    title: 'Old Fashioned',
    price: '31€',
    tags: 'Bourbon | Brauner Zucker | Angostura-Bitter',
  },
  {
    title: 'Negroni',
    price: '26€',
    tags: 'Gin | Süßer Wermut | Campari | Orangengarnitur',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
