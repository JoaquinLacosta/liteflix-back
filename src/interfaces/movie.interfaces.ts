import { Document, Model } from "mongoose";

export interface Movie {
  title: string;
  imageUrl: string;
  stars: number;
  createdAt?: Date;
}

export interface MovieDoc extends Movie, Document {}
export interface MovieModel extends Model<MovieDoc> {}
