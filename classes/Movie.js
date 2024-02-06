// import the Media class:
const Media = require("./Media.js");
// create your Movie class:

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static longestMovie(arr){
        //grab the first movie
        let currentLongest = arr[0];
        //loop through the movies and check duration vs current longest duration
        arr.forEach(Movie => {
            if(currentLongest.duration < Movie.duration){
                currentLongest = Movie
            }
        });
        //replace with duration if longer
        //return the MOVIE with longest duration
        return currentLongest
    }
}
// don't change below
module.exports = Movie;