export class Record {
  public artist: string;
  public title: string;
  public year: number;
  public genres: string[];
  public label: string;
  public imagePath: string;

  constructor( artist: string,  title: string,  year: number,  genres: string[],  label: string,  imagePath: string) {
    this.artist = artist;
    this.title = title;
    this.year = year;
    this.genres = genres;
    this.label = label;
    this.imagePath = imagePath;
  }
}
