import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { CreateTweet, SignUpDto } from './dtos/user.dto';

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

  CreateTweet(body: CreateTweet) {
    const user = this.users.find((user) => user.username === body.username);
    if (!user) throw { name: 'UNAUTHORIZED' };
    this.tweets.push(new Tweet(user, body.tweet));
    return 'OK';
  }
}
