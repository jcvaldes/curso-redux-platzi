import { getPokemonDetails, getPokemons } from './../../api/index'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading } from './uiSlice'

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetails {
  id: number
  name: string
  image: string
  types: string
  favorite: boolean
}

interface PokemonState {
  pokemons: PokemonDetails[]
}

const initialState: PokemonState = {
  pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    // dispatch loader
    // fetch
    // dispatch loader
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemons()
    const pokemonDetails = await Promise.all(
      pokemonsRes.map(
        (pokemon: Pokemon) => pokemon && getPokemonDetails(pokemon)
      )
    )
    dispatch(setPokemons(pokemonDetails))
    dispatch(setLoading(false))
  }
)
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId
      })

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite

        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    }
  }
})

export const { setFavorite, setPokemons } = dataSlice.actions
console.log('🚀 ~ file: dataSlice.js ~ line 29 ~ dataSlice', dataSlice)

export default dataSlice.reducer
