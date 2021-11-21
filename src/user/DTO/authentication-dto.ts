import { IsNotEmpty } from 'class-validator';

export class AuthenticationDto {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  name?: string;
}
