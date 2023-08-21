import {
  IS_URL,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  isURL,
} from 'class-validator';

export class SignUpDto {
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
  @IsUrl(
    {},
    {
      message: 'All fields are required!',
    },
  )
  avatar: string;
}

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
