class Media {
  constructor(name) {
    this._title = name,
    this._isCheckedOut = false,
    this._ratings = []
  }
  
  get title() {
  	return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  get ratings() {
  	return this._ratings;
  }
  
  set isCheckedOut(checkOut) {
    this._isCheckedOut = checkOut;
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating() {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let average = this._ratings.reduce(reducer) / this._ratings.length;
    return average;
  }
  
  addRating(rating) {
    this._ratings.push(rating);
  }
  
}


class Book extends Media {
  constructor(author, pages, title){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get pages() {
    return this._pages;
  }
  
  get author() {
    return this._author;
  }
}


class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runtime = runTime;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._aritist = artist;
    this._songs = songs;
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
}

const firstBook = new Book('Bill Bryson', 502, 'A short book about something');
const secondBook = new Book('Bill gates', 103, 'How to do it');

secondBook.toggleCheckOutStatus();

console.log(firstBook.isCheckedOut);
console.log(secondBook.isCheckedOut);


firstBook.addRating(5);
firstBook.addRating(5);
firstBook.addRating(4);
firstBook.addRating(4);

console.log(firstBook.getAverageRating());

secondBook.toggleCheckOutStatus();

console.log(firstBook.isCheckedOut);
console.log(secondBook.isCheckedOut);



