// import the Media class:
const Media = require("./Media.js")
// create your Book class:

class Book extends Media {
    
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre);
        this.author = author;
        this.numPages= numPages;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(arr){
        let highestRatingBook = arr[0]; // place holder checking all books in the array 
      // iterate through every book 
        for(let i = 0 ; i < arr.length ; i++){
            // check book rating 
            if (arr[i].rating > highestRatingBook.rating){
                highestRatingBook = arr[i];
            }
        }
        return highestRatingBook; // return highest rating book : endgoal 
    } 
}


// don't change below
module.exports = Book;
