import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PokeapiResponse } from './interfaces/pokeapi-response.interface';
import { CreatePokemonDto } from '../pokemon/dto/create-pokemon.dto';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly fetchAdapter: FetchAdapter,
  ) {}

  private async createBatch(createPokemonDtos: CreatePokemonDto[]) {
    try {
      await this.pokemonModel.insertMany(createPokemonDtos);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error creating seed registers');
    }
  }

  async executeSeed() {
    try {
      const data = await this.fetchAdapter.get<PokeapiResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=650',
      );

      const results = data.results.map(({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];
        return { name, no };
      });

      await this.pokemonModel.deleteMany({});
      await this.createBatch(results);

      return 'Seed executed';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error executing seed');
    }
  }
}
