import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { Public } from 'src/auth/auth.decorator';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/model/role.enum';

@ApiTags('auth')
@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('/signup')
  async createUser(
    @Body('password') password: string,
    @Body('username') username: string,
    @Body('roles') roles: Role[],
  ): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.createUser(
      username,
      hashedPassword,
      roles,
    );
    return result;
  }
}
