export class Record {
  public artist: string;
  public title: string;
  public released: number;
  public genres: string[];
  public label: string;
  public imagePath: string;

  constructor( artist: string,  title: string,  released: number,  genres: string[],  label: string,  imagePath: string) {
    this.artist = artist;
    this.title = title;
    this.released = released;
    this.genres = genres;
    this.label = label;
    this.imagePath = imagePath;
  }
}
