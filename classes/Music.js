// import the Media class:
const Media = require("./Media.js");
// create your Music class:
class Music extends Media {
  constructor(title, genre, year, artist, length) {
    super(title, genre, year);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
  static shortestAlbum(arr) {
    let shortestSong = arr[0];
    arr.forEach((song) => {
      if (song.length < shortestSong.length) {
        shortestSong = song;
      }
    });
    return shortestSong;
  }
}
// don't change below
module.exports = Music;
