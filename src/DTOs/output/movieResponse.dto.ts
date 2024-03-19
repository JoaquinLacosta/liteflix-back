import { MovieDoc } from "../../interfaces/movie.interfaces";

export class MovieResponseDTO {
  public readonly title;
  public readonly imageUrl;
  public readonly createdAt;
  public readonly stars;

  constructor(movie: MovieDoc) {
    this.title = movie.title;
    this.imageUrl = movie.imageUrl;
    this.createdAt = movie.createdAt;
    this.stars = movie.stars;
  }
}
