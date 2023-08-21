import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { SignUpDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];
  constructor() {
    this.users = [];
    this.tweets = [];
  }

  signUp(body: SignUpDto) {
    this.users.push(new User(body.username, body.avatar));
    return 'OK';
  }
}
