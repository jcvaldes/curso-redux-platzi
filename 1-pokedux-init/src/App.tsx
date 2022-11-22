import { Col } from 'antd'
import { useEffect, useState } from 'react'
import { PokemonList } from './components'
import { Searcher } from './components/Searcher'
import logo from './assets/logo.svg'
import { getPokemons } from './api'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    const fetchPokemonst = async () => {
      const pokemonsRes = await getPokemons()
      setPokemons(pokemonsRes)
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
