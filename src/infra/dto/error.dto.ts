import { IsString, IsNotEmpty } from 'class-validator';

export class ErrorDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  stack?: string;

  @IsString()
  componentStack?: string;
}
