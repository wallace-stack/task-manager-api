import { IsString, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title!: string;

  @IsNumber()
  userId!: number;
}