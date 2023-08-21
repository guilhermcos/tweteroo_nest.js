import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTweet, SignUpDto } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  health() {
    return "I'm okay!";
  }

  @Post('sign-up')
  @HttpCode(200)
  signUp(@Body() body: SignUpDto) {
    try {
      return this.appService.signUp(body);
    } catch (error) {
      throw new HttpException(
        'All fields are required!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('tweets')
  tweet(@Body() body: CreateTweet) {
    try {
      return this.appService.CreateTweet(body);
    } catch (error) {
      if (error.name === 'UNAUTHORIZED') {
        throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
      }
    }
  }
}
