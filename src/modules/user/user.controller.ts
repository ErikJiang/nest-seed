import { Get, Post, Body, Put, Delete, Param, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRO } from './interface/user.interface';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { User } from './decorator/user.decorator';

import {
  ApiUseTags,
  ApiBearerAuth
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('user')
@Controller()
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get('user')
  async findMe(@User('email') email: string): Promise<UserRO> {
    return await this.userService.findByEmail(email);
  }

  @Put('user')
  async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @Post('users')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete('users/:slug')
  async delete(@Param() params) {
    return await this.userService.delete(params.slug);
  }

  @Post('users/login')
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<UserRO> {
    const _user = await this.userService.findOne(loginUserDto);

    const errors = { User: ' not found' };
    if (!_user) throw new HttpException({ errors }, HttpStatus.UNAUTHORIZED);

    const token = await this.userService.generateJWT(_user);
    const { email, name, bio, avatar } = _user;
    const user = { email, token, name, bio, avatar };
    return { user }
  }
}
