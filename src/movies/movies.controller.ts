import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ParseObjectIdPipe } from '../utils/parseObjectIdPipe.pipe';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.moviesService.findAll(request);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the movie to retrieve',
    type: String,
    required: true,
  })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'The id of the movie to update',
    type: String,
    required: true,
  })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({
    name: 'id',
    description: 'The id of the movie to remove',
    type: String,
    required: true,
  })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.moviesService.remove(id);
  }
}
