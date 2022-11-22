import { IPokemonDetails, IPokemonType } from './../store/actions/types'
import axios from 'axios'
import { PokemonResponse } from './responses'

export const getPokemons = async (): Promise<IPokemonType[] | undefined> => {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=4'
  try {
    const { data } = await axios.get(URL)
    const { results } = data
    return results
  } catch (err) {
    console.error('err '.repeat(5), err)
  }
}

export const getPokemonDetails = async (pokemon: IPokemonType) => {
  try {
    const {
      data: { id, name, sprites, types }
    } = await axios.get<PokemonResponse>(pokemon.url)
    return {
      id,
      name,
      image: sprites.front_default,
      types: types.map((i) => i.type.name).join(', '),
      favorite: false
    }
  } catch (err) {
    console.error('err '.repeat(5), err)
  }
}
