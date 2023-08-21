import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { SignUpDto } from './dtos/user.dto';
import { CreateTweet } from './dtos/tweet.dto';

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

  createTweet(body: CreateTweet) {
    const user = this.users.find((user) => user.username === body.username);
    if (!user) throw { name: 'UNAUTHORIZED' };
    this.tweets.push(new Tweet(user, body.tweet));
    return 'OK';
  }

  getTweets({ page = 1 }) {
    if (page <= 0) {
      throw {
        name: 'INVALID_PAGE',
      };
    }
    let initial = this.tweets.length - 15 * page;
    initial = Math.max(initial, 0);
    let final = this.tweets.length - 15 * (page - 1);
    const lastTweets = this.tweets.slice(initial, final);

    return lastTweets.map((tweet) => tweet.formatTweetWithAvatar());
  }

  getTweetsByUsername(username: string) {
    const tweetsByUser = this.tweets.filter(
      (tweet) => tweet.user.username === username,
    );
    return tweetsByUser.map((tweet) => tweet.formatTweetWithAvatar());
  }
}
