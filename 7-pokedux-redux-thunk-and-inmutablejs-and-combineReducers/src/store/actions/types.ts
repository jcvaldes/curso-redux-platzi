export const SET_POKEMONS = 'SET_POKEMONS'
export const SET_LOADING = 'SET_LOADING'
export const SET_FAVORITE = 'SET_FAVORITE'

export interface IPokemonType {
  name: string
  url: string
}

export interface IPokemonDetails {
  id: number
  name: string
  image: string
  types: string
  favorite: boolean
}
