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
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ParseObjectIdPipe } from '../utils/parseObjectIdPipe.pipe';
import { HasRoles } from 'src/auth/has-roles.decorator';
import { Role } from 'src/model/role.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @HasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() request: Request) {
    return this.moviesService.findAll(request);
  }

  @HasRoles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
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

  @HasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
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

  @HasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
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
