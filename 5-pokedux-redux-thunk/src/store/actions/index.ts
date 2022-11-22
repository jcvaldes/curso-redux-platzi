import {
  IPokemonDetails,
  IPokemonType,
  SET_FAVORITE,
  SET_LOADING,
  SET_POKEMONS
} from './types'
import { Dispatch } from 'redux'
import { getPokemonDetails } from '../../api'

export const setPokemonsAction = (
  payload: (IPokemonDetails | undefined)[]
) => ({
  type: SET_POKEMONS,
  payload
})
export const setLoadingAction = (payload: boolean) => ({
  type: SET_LOADING,
  payload
})

export const setFavoriteAction = (payload: { pokemonId: number }) => ({
  type: SET_FAVORITE,
  payload
})

export const getPokemonsDetailsAction =
  (pokemons: IPokemonType[] = []) =>
  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  async (dispatch: Dispatch<any>) => {
    const pokemonDetails = await Promise.all(
      pokemons.map((pokemon) => pokemon && getPokemonDetails(pokemon))
    )
    dispatch(setPokemonsAction(pokemonDetails))
  }
// Redux-Thunk action
// const setPokemons: ActionCreator<
//   ThunkAction<Action, RootState, void, Action>
// > = (text: string) => {
//   return (dispatch: Dispatch<RootState>): Action => {
//     return dispatch({
//       type: SET_POKEMONS,
//       payload
//     })
//   }
// }

// Async Redux-Thunk action
// export const getPokemonsWithDetails: ActionCreator<
//   ThunkAction<Promise<Action>, RootState, void, Action>
// > = (pokemons: Pokemon[]) => {
//   return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
//     const pokemonDetails = await Promise.all(
//       pokemons.map((pokemon) => pokemon && getPokemonDetails(pokemon))
//     )
//     return dispatch(setPokemons(pokemonDetails))
//   }
// }
