import { Col, Row, Spin } from 'antd'
import { FC, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import './App.css'
import logo from './assets/logo.svg'
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import { fetchPokemonsWithDetails } from './store/slices/dataSlice'

const App: FC = () => {
  const pokemons = useSelector(
    (state: any) => state.data.pokemons,
    shallowEqual
  )
  // Dispatch se debe tipar para que no ocurran inconvenientes con lo que devuelve
  const dispatch = useDispatch<Dispatch<any>>()
  const loading = useSelector((state: any) => state.ui.loading)
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
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
