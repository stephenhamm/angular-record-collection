export class Record {
  public artist: string;
  public name: string;
  public year: number;
  public genre: string[];
  public label: string;
  public imagePath: string;

  constructor(artist: string, name: string, year: number, genre: string[], label: string, imagePath: string) {
    this.artist = artist;
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.label = label;
    this.imagePath = imagePath;
  }
}
