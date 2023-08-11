import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { Public } from 'src/auth/auth.decorator';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user-dto';

@ApiTags('auth')
@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    const result = await this.usersService.createUser(
      createUserDto.username,
      hashedPassword,
      createUserDto.roles,
    );
    return result;
  }
}
