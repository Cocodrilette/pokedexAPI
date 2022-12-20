import axios from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { InternalServerErrorException } from '@nestjs/common';

export class AxiosAdapter implements HttpAdapter {
  private axios = axios;
  async get<T>(url: string): Promise<T> {
    try {
      /*
       * headers options must be set explicit here because knowing issue
       * see: https://github.com/axios/axios/issues/5346
       */
      const res = await this.axios.get(url, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      });
      if (!res.data) {
        throw new Error('Data fetching failed.');
      }
      return res.data;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error creating seed registers');
    }
  }
}
