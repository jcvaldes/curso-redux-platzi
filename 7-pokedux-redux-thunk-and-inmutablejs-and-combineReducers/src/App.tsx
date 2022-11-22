import React, { FC, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Col, Row, Spin } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemons } from './api'
import { Dispatch } from 'redux'
import { IPokemonDetails } from './store/actions/types'
import { getPokemonsDetailsAction, setLoadingAction } from './store/actions'
import logo from './assets/logo.svg'
import './App.css'
import { get, getIn } from 'immutable'
type AppType = {
  pokemons: IPokemonDetails[]
  loading: boolean
}

const App: FC = () => {
  // const pokemons = (
  //   useSelector((state: AppType) => get(state, 'pokemons')) as any
  // ).toJS()

  //shallowEqual hace una comparacion estricta para que no se disparen renders innecesarios
  const pokemons = (
    useSelector((state: AppType) =>
      getIn(state, ['data', 'pokemons'], shallowEqual)
    ) as any
  ).toJS()

  // const loading = useSelector((state: AppType) => state.loading)
  const loading = useSelector((state: AppType) =>
    getIn(state, ['ui', 'loading'])
  )

  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  const dispatch = useDispatch<Dispatch<any>>()
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoadingAction(true))
      const response = await getPokemons()
      response && dispatch(getPokemonsDetailsAction(response))
      dispatch(setLoadingAction(false))
    }

    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Row>
        <Col>
          <img src={logo} alt="Pokedux" />
          <Searcher />
          {loading ? (
            <Spin spinning size="large" />
          ) : (
            <PokemonList pokemons={pokemons} />
          )}
        </Col>
      </Row>
    </div>
  )
}

export default App
