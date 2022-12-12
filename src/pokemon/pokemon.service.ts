import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose/dist';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.exceptionsHandler(error);
    }
  }

  async findAll({ offset = 0, limit = 10 }: PaginationDto) {
    const pokemons = await this.pokemonModel
      .find({})
      .skip(offset)
      .limit(limit)
      .sort({ no: 1 })
      .select('-__v');
    if (pokemons.length === 0)
      throw new InternalServerErrorException(
        'Cannot find pokemons in the database',
      );
    return pokemons;
  }

  async findOne(searchTerm: string) {
    let pokemon: Pokemon;

    if (!isNaN(+searchTerm)) {
      pokemon = await this.pokemonModel.findOne({ no: searchTerm });
    }

    if (!pokemon && isValidObjectId(searchTerm)) {
      pokemon = await this.pokemonModel.findById(searchTerm);
    }

    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: searchTerm.toLowerCase().trim(),
      });
    }

    if (!pokemon)
      throw new NotFoundException(
        `The parameter ${searchTerm} does no match with any pokemon`,
      );

    return pokemon;
  }

  async update(searchTerm: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const pokemon = await this.findOne(searchTerm);
      if (updatePokemonDto.name)
        updatePokemonDto.name = updatePokemonDto.name.toLowerCase();

      const updatedPokemon = {
        no: updatePokemonDto.no ? updatePokemonDto.no : pokemon.no,
        name: updatePokemonDto.name ? updatePokemonDto.name : pokemon.name,
      };

      await pokemon.updateOne(updatedPokemon, { new: true });

      return {
        message: 'Pokemon updated successfully',
        fields: updatePokemonDto,
      };
    } catch (error) {
      this.exceptionsHandler(error);
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
      if (deletedCount === 0) {
        throw new BadRequestException(`Pokemon with id ${id} does not exits`);
      }
    } catch (error) {
      return error.response;
    }
  }

  private exceptionsHandler(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Pokemon already exists in db with [ ${JSON.stringify(
          error.keyValue,
        )} ]`,
      );
    }

    console.log(error);
    throw new InternalServerErrorException(
      "Can't update pokemon. Internal server error.",
    );
  }
}
