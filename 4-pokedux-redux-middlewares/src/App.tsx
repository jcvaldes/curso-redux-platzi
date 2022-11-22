import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './api'
import logo from './assets/logo.svg'
import { PokemonList } from './components'
import { Searcher } from './components/Searcher'
import { setPokemons } from './redux/actions'
import './App.css'

type AppProps = {}

const App: FC = () => {
  const pokemons = useSelector((state: any) => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemonst = async () => {
      const pokemonsRes = await getPokemons()
      dispatch(setPokemons(pokemonsRes))
    }
    fetchPokemonst()
  }, [])

  return (
    <div className="App">
      <img src={logo} alt="Pokedux" />
      <Searcher />

      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
