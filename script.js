const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/* function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(2);

// not useful to extract data from a huge database
//const title = book.title;
//const author = book.author;

//title;
// so we use destructuring
const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
  book;
console.log(author, title, genres);

//destructuring with array

//const primaryGenres = genres[0];
//const secondaryGenres = genres[1];

// rest operator ...+chosenname  Always written at the end.that give an array
const [primaryGenres, secondaryGenres, ...otherGenres] = genres;

console.log(primaryGenres, secondaryGenres, otherGenres);

// spread operator add an element to an existing array

const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres);

// add a new value to an object with spread operator movie publication
// and overwriting an existing property page number
const updatedBook = {
  ...book,
  moviePublicationDate: '2001-12-19',
  pages: 1210,
};
console.log(updatedBook);

// arrow functions useful for one liner function

// traditional way
/* function getYear(str) {
  return str.split('-')[0];
} */
//console.log(getYear(publicationDate));
// arrow function

/* const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate)); */

// Template literals back ticks = template literals ``
// create js expression inside  a string

/* const summary = `${title},  a ${pages}-page long book, was written by ${author}.The book has ${
  hasMovieAdaptation ? '' : 'not'
} been adapted as a movie and published in ${getYear(publicationDate)}`;
summary;

// Ternaries instead of if/else

// very special operator with 3 parts: condition, then the result if its is true, the result if it is false

const pagesRange = pages > 1000 ? 'Over a thousand' : 'less than 1000';
pagesRange;
console.log(`the book has ${pagesRange} pages`);

//short circuiting operators && et ||

console.log(true && 'some string');
console.log(false && 'some string');

// use as if

console.log(hasMovieAdaptation && 'this book has a movie');

// works also with truthy and falsy: 0, null, undefined

console.log('jonas' && 'some text');
console.log(0 && 'some text');

// with or || it is the opposite of and &&

console.log(true || 'some string');
console.log(false || 'some string');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'not translated';
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || 'no data';
countWrong;

const count = book.reviews.librarything.reviewsCount ?? 'no data';
count;

// ? optional chaining only read define reviews
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  goodreads;
  const librarything = book.reviews?.librarything?.reviewsCount;
  librarything;

  return goodreads + librarything; */
/* }

console.log(getTotalReviewCount(book)); */

// the array map method

// the map method
/* 
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

// filter method

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes('adventure'))
  .map((book) => book.title);
adventureBooks;

// reduce method reduce array to one number

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// sort array method

const arr = [3, 7, 8, 9, 2, 6];
// a - b ascending, b-a descending
const sorted = arr.sort((a, b) => a - b);
sorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// immutable array  do not manipulate data structure add, delete or update array without changing original data

// add a book object to array

const newBook = {
  id: 6,
  title: 'the chamber of ServiceWorkerRegistration',
  author: 'Jk Rowling',
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

const booksUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksUpdate;
 */

/* fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data)); */

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}
getTodos();
