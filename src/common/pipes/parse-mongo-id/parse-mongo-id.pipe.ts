import { Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(
        `The parameter [ ${value} ] is not valid Mongo ID`,
      );
    }
    return value;
  }
}
