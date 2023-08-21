import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpDto } from './dtos/user.dto';
import { CreateTweet, GetTweetsQuery } from './dtos/tweet.dto';

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
      throw error;
    }
  }

  @Post('tweets')
  tweet(@Body() body: CreateTweet) {
    try {
      return this.appService.createTweet(body);
    } catch (error) {
      if (error.name === 'UNAUTHORIZED') {
        throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
      }
      throw error;
    }
  }

  @Get('tweets')
  getTweets(@Query() query: GetTweetsQuery) {
    try {
      return this.appService.getTweets({
        page: query?.page ? Number(query.page) : undefined,
      });
    } catch (error) {
      if (error.name === 'INVALID_PAGE') {
        throw new HttpException(
          'Informe uma página válida!',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }

  @Get('tweets/:username')
  getTweetsByUsername(@Param('username') username: string) {
    return this.appService.getTweetsByUsername(username);
  }
}
