/*eslint-disable*/
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  offset?: number;
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;
}
