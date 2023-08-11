import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'The Force Awakens' })
  title: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 7 })
  episode_id: number;

  @ApiProperty({
    example:
      'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from ...',
  })
  opening_crawl: string;

  @ApiProperty({ example: 'J. J. Abrams' })
  director: string;

  @ApiProperty({ example: 'Bryan Burk, Bad Robot' })
  producer: string;

  @ApiProperty({ example: '2015-12-17' })
  release_date: string;

  @ApiProperty({ example: ['https://swapi.dev/api/people/1/'] })
  characters: string[];

  @ApiProperty({ example: ['https://swapi.dev/api/planets/1/'] })
  planets: string[];

  @ApiProperty({ example: ['https://swapi.dev/api/starships/2/'] })
  starships: string[];

  @ApiProperty({ example: ['https://swapi.dev/api/vehicles/4/'] })
  vehicles: string[];

  @ApiProperty({ example: ['https://swapi.dev/api/species/1/'] })
  species: string[];

  @ApiProperty({ example: '2014-12-10T14:23:31.880000Z' })
  created: string;

  @ApiProperty({ example: '2014-12-20T19:49:45.256000Z' })
  edited: string;

  @ApiProperty({ example: 'https://swapi.dev/api/films/1/' })
  url: string;
}
