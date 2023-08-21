import { IS_URL, IsNotEmpty, IsString, IsUrl, isURL } from 'class-validator';

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
