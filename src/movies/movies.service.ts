import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from '../schemas/movie.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  async findAll(request: Request): Promise<Movie[]> {
    return this.movieModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieModel.findById({ _id: id }).exec();
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate({ _id: id }, updateMovieDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.movieModel.findByIdAndDelete({ _id: id });
  }
}
