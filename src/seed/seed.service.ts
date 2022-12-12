import { Injectable } from '@nestjs/common';
import { PokeapiResponse } from './interfaces/pokeapi-response.interface';

@Injectable()
export class SeedService {
  private readonly dataFetch = fetch;

  private async getAllPokes<T>(url: string): Promise<T> {
    return this.dataFetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
  }

  async executeSeed() {
    const data = await this.getAllPokes<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach(({ url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      console.log(no);
    });
    return data.results;
  }
}
