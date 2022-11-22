import { Reducer } from 'react'
import { Store } from 'redux'
import { AppState } from '../redux/reducers/pokemons'

// el middleware se ejecuta entre la accion y antes de que llegue al reducer
export const logger = (store: any) => (next: any) => (action: any) => {
  console.log(action)

  // next hace que llegue al reducer
  next(action)
}

export const featuring = (store: any) => (next: any) => (actionInfo: any) => {
  const featured = [...actionInfo.payload]
  const updatedActionInfo = {
    ...actionInfo,
    payload: featured
  }
  debugger
  next(updatedActionInfo)
}
