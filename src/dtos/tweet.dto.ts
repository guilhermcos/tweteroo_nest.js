import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTweet {
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  @IsString({
    message: 'All fields are required!',
  })
  username: string;

  @IsNotEmpty({
    message: 'All fields are required!',
  })
  @IsString({
    message: 'All fields are required!',
  })
  tweet: string;
}

export class GetTweetsQuery {
  @IsOptional()
  @IsNumberString(
    {},
    {
      message: 'Informe uma página válida!',
    },
  )
  page?: string;
}
